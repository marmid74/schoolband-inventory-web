import express from 'express';
let router = express.Router();
import * as configuniforms from '../controllers/configuniform.controller';

/*
//Dummy check
router.post('/api/items', items.dummy);
*/

// Create a new config uniform item, incl. req.body
router.post('/api/config/uniforms', configuniforms.create);


//find all
 router.get('/api/config/uniforms', configuniforms.find);

//List all items
// router.get('/api/items', items.listAll)

//Find by one by id 
// router.get('/api/items/:itemId', items.findById);

//Find by one by id and update, incl. req.body
// router.put('/api/items/:itemId', items.findByIdAndUpdate);

//Delete one item by id
// router.delete('/api/items/:itemId', items.findByIdAndDelete);


export default router;