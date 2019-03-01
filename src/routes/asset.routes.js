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

// Instrument - create new
router.post('/api/asset/instrument',asset.createInstrument);

//find all
router.get('/api/asset/uniform', asset.getAll);
router.get('/api/asset/instrument', asset.getAll);

//find all 
//router.get('/api/asset/uniform', asset.findOne);

//Find instruments by id 
 router.get('/api/asset/instrument/:instrumentId', asset.findInstrumentById);

 //Find instruments by location
 router.get('/api/asset/instrument/location/:location', asset.findInstrumentByLocation);
//Find by one by id and update, incl. req.body
router.put('/api/asset/uniform/:itemId', asset.findByIdAndUpdate);

//Delete one item by id
router.delete('/api/asset/uniform/:itemId', asset.findByIdAndDelete);

// ToDo: NOTE



export default router;