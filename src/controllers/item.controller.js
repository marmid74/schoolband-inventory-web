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

export function create(req, res) {
    console.log("Retur: " + req.body.type);
    // Create and Save a new Item
    if(!req.body) {
      return res.status(400).send({ message: 'Item cannot be empty....' });
    }

    new Item({
        type: req.body.type,
        id: req.body.id,
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