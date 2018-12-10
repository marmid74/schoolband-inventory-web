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
//syncron
export function create (req,res) {
    const newItemObj = new Item(req.body);
    newItemObj.save(err => {
        if(err) return res.status(500).send(err);
        return res.status(200).send(newItemObj);
    });
}

/* NOT WORKING YET
export function updateOne(req, res){
    let item = req.params.itemID;
    let itemid = item.toString();

    Item.findOneAndUpdate(itemid, {$set: req.body},callback );
    
}
*/


export function findById(req,res){
    Item.findById(req.params.itemId, (err, Item) => {
        if (err) return res.status(500).send(err);
        return res.status(200).send(Item);
    });
}

export function find(req,res) {   
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
/*
export function findOne(req, res){
    let item = req.params.itemID;
    let itemid = item.toString();
    Item.findOne({id: itemid})
        .then((items)=>{
            if(!items) {
                return res.status(404).send({message:'Item: '+ req.params.itemID + ' not found with id: ' + req.body.param + ' ,value: ' + req.body.value});
            }
            res.send(items);
        })
        .catch((err)=>{
            handleError(res, err, 'Error retrieving item with '+ req.body.param + ' ' + req.body.value);
        });
}

*/

export function listAll(req, res){
    //List all items of a specific type from Db
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