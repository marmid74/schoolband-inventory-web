var express = require('express');
var router = express.Router();

/*router.get('/', function(req, res){
   res.send('GET route on things.');

});
*/

//Middleware function to log request protocol
router.use('/', function(req, res, next){
    console.log("A request for things received at " + Date.now());
    next();
});

// Route handler that sends the response
router.get('/', function(req, res){
    res.send('Things');
});



router.post('/', function(req, res){
   res.send('POST route on things.');
});

//export this router to use in our index-tutorialPartUptoForm.js
module.exports = router;
