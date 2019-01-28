import Item from '../models/item.model';

const handleError = (res, err, errMessage) => {
    console.log(err);
    if(err.kind === 'ObjectId') {
      return res.status(404).send({ message: errMessage + err });                
    }
    return res.status(500).send({ message: errMessage + err });
  };

/* export function dummy(req,res){
    return res.status(200).send({message: 'Yep, api alive'});
}
*/


//asyncron
/*export function create(req, res) {
    console.log("Retur: " + req.body.type);
    // Create and Save a new Item
    if(!req.body) {
      return res.status(400).send({ message: 'Item cannot be empty....' });
    }

    new Item({
        id: req.body.id,
        type: req.body.type,
        model: req.body.model,
        size: req.body.size,
        quality: req.body.quality,
        location: req.body.location 
    }).save()
      .then((saved) => {
        console.log('Item saved:', saved);
        res.send({
            message: 'Item saved successfully'
        });
       })
       .catch((error) => {
        console.log(error);
        res.status(500).send({
          message: 'There was an error saving this item.'
        });
      });

}
*/
// POST
export async function create (req,res) {
    console.log("EndpointAPI: create");
    let countItems = 0;
    let prefix = '';

    console.log('body:', req.body);

    if ( (req.body.size != null) && (req.body.type != null) ) {
        let filterObj = {
            "size": req.body.size,
            "type": req.body.type
        };
        console.log('Searchobj: ', filterObj);
        console.log('Type : ', req.body.type);
        
        try {
            let dbLookUp =  await Item.find(filterObj)
            console.log('dbLookUp result:', dbLookUp);

            countItems = (Object.keys(dbLookUp).length).toString();
            console.log('Value of count: ', countItems);

            let newItemObj = new Item(req.body);
            let nextId = parseInt(countItems) + 1;
            newItemObj.nr = req.body.size + '-' + nextId.toString();
            console.log('new obj to be saved', newItemObj);

            let result = await newItemObj.save();
            res.send({
                message: 'Item saved successfully:',
                body: result
            });
        } catch (err) {
            console.log('Error in Create new item: ', err);
            return res.status(500).send(err);
        }
    }
     
}



//syncron
/*
export function create (req,res) {
    console.log("EndpointAPI: create");
    let countItems = 0;
    console.log('body:', req.body);

    if ( (req.body.size != null) && (req.body.type != null) ) {
        let filterObj = {
            "size": req.body.size,
            "type": req.body.type
        };
        console.log('Searchobj: ', filterObj);
        console.log('Type : ', req.body.type);
        Item.find(filterObj)
            .then(items => {
                console.log('result search items: ', items);       
                countItems = (Object.keys(items).length).toString();
                console.log('Value of count: ', countItems);
                let newItemObj = new Item(req.body);
                let nextId = parseInt(countItems) + 1;
                newItemObj.nr = req.body.size + '-' + nextId.toString();
                console.log('new obj ', newItemObj);
                newItemObj.save()
                    .then((saved) => {
                        console.log('Item saved:', saved);
                        res.send({
                            message: 'Item saved successfully:',
                            body: saved
                        });
                    })
                    .catch((error) => {
                        console.log(error);
                        res.status(500).send({
                        message: 'There was an error saving this item.'
                        });
                    });
            })
            .catch((err) => {
                console.log("Error in fetching items");
                handleError(res,err, "There was an error retrieving items");
            });
    } else {
        res.status(500).send({
            message: 'Size and Type of item required. Item not saved.',
            body: req.body
            });
    }
}
*/
// PUT
export function findByIdAndUpdate(req, res){
    console.log("EndpointAPI: findByIdAndUpdate: ", req.body);
    Item.findByIdAndUpdate(req.params.itemId, req.body, {new:true}, (err, items) => {
        if(err) return res.status(500).send(err);
        return res.status(200).send({'message': 'Successfully updated item',
                                     'inputdata': req.body,
                                     'body': items
                                    });
    })
}


export function findById(req,res){
    console.log("EndpointAPI: findById");
    Item.findById(req.params.itemId, (err, Item) => {
        if (err) return res.status(500).send(err);
        return res.status(200).send(Item);
    });
}

export function find(req,res) {   
    console.log("EndpointAPI: find");
    if (req.body){
        Item.find(req.body, (err, items) => {
            if(err) return res.status(500).send(err);         
            return res.status(200).send(items);
        });
    } else {
        Item.find((err, items) => {
            if(err) return res.status(500).send(err);
            
            return res.status(200).send(items);
        });
    }
}

//not in use --- below find in item.routes.js
export function listAll(req, res){
    //List all items of a specific type from Db
    console.log("EndpointAPI: listAll");
    Item.find()
        .then(items => {
            console.log(items);
            res.send(items);
        })
        .catch((err) => {
            console.log("Error in fetching items");
            handleError(res,err, "There was an error retrieving items");
        });
}

export function findByIdAndDelete(req, res){
    console.log("EndpointAPI: findByIdAndDelete");
    Item.findByIdAndDelete(req.params.itemId, (err, items) => {
        if (err) return res.status(500).send(err);
        const response = {
            message: "Item successfully deleted",
            id: items._id
        };
        return res.status(200).send(response);
    });
}