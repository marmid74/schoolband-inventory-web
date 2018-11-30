import Item from '../models/item.model';

const handleError = (res, err, errMessage) => {
    console.log(err);
    if(err.kind === 'ObjectId') {
      return res.status(404).send({ message: errMessage + err });                
    }
    return res.status(500).send({ message: errMessage + err });
  };



export function create(req, res) {
    // Create and Save a new Item
    if(!req.body) {
      return res.status(400).send({ message: 'Item cannot be empty....' });
    }

    new Item({
        item_type: req.body.item_type,
        item_id: req.body.item_id,
        item_model: req.body.item_model,
        item_size: req.body.item_size,
        item_number: req.body.item_number,
        item_quality: req.body.item_quality,
        item_location: req.body.item_location 
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