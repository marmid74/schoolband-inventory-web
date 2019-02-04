import express from 'express';
let router = express.Router();
import * as asset from '../controllers/asset.controller';

/*
//Dummy check
router.post('/api/asset', asset.dummy);
*/

// UNIFORM
// Create a new uniform, incl. req.body
router.post('/api/asset/uniform', asset.createUniform);


//find all
router.get('/api/asset/uniform', asset.find);

//List all asset
router.get('/api/asset/uniform', asset.listAll)

//Find by one by id 
router.get('/api/asset/uniform/:itemId', asset.findById);

//Find by one by id and update, incl. req.body
router.put('/api/asset/uniform/:itemId', asset.findByIdAndUpdate);

//Delete one item by id
router.delete('/api/asset/uniform/:itemId', asset.findByIdAndDelete);

// ToDo: NOTE


// ToDo: INSTRUMENT
// Create a new instrument
router.post('/api/asset/instrument', asset.createInstrument);

export default router;