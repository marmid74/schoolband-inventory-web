import express from 'express';
let router = express.Router();
import * as users from '../controllers/user.controller';

/*
//Dummy check
router.post('/api/items', items.dummy);
*/

// Create a new Item, incl. req.body
router.post('/api/users', users.create);


//find all
router.get('/api/users', users.find);

//List all users
router.get('/api/users', users.listAll)

//Find by one by id 
router.get('/api/users/:userId', users.findById);

//Find by one by id and update, incl. req.body
router.put('/api/users/:userId', users.findByIdAndUpdate);

//Delete one user by id
router.delete('/api/users/:userId', users.findByIdAndDelete);

// Login endpoint
router.post('/api/users/email/:userEmail', users.loginUser);


export default router;