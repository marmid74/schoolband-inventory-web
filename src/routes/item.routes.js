import express from 'express';
let router = express.Router();
import * as items from '../controllers/item.controller';

/*
//Dummy check
router.post('/api/items', items.dummy);
*/

// Create a new Item
router.post('/api/items', items.create);

//Find by filter and update
router.get('/api/items/:itemID', items.findOne);

//List all items
router.get('/api/items', items.listAll)

export default router;