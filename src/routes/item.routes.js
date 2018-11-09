import express from 'express';
let router = express.Router();
import * as items from '../controllers/item.controller';

// Create a new Item
router.post('/api/items', items.create);

export default router;