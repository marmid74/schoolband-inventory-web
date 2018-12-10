import express from 'express';
let router = express.Router();
import * as items from '../controllers/item.controller';

/*
//Dummy check
router.post('/api/items', items.dummy);
*/

// Create a new Item
router.post('/api/items', items.create);


//find all
router.get('/api/items', items.find);

//Find by one by id 
router.get('/api/items/:itemId', items.findById);

//Find by one by id and update 
//router.post('/api/items/:itemId', items.updateOne);


//List all items
router.get('/api/items', items.listAll)

export default router;