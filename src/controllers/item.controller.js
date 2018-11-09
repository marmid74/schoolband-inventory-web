import Item from '../models/item.model';

export function create(req, res) {
    // Create and Save a new Item
    if(!req.body.item_type) {
      return res.status(400).send({ message: 'Item cannot be empty.' });
    }

    return res.status(200).send({message: "Her skal du lagre et item."});
}

export function listAll(req, res){
    //List all items of a specific type from Db
}