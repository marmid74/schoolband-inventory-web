const Joi = require('joi');

var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var app = express();



var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/myUniform2');

var UniformSchema = mongoose.Schema({
    item_type: String,
    size: String,
    item_number: Number,
    status: String
});
var Uniform = mongoose.model("Uniform", UniformSchema);


app.get('/', function(req, res){
   res.render('form');
});

app.set('view engine', 'pug');
app.set('views', './views');

// for parsing application/json
app.use(bodyParser.json()); 

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true })); 
//form-urlencoded

// for parsing multipart/form-data
app.use(upload.array()); 
app.use(express.static('public'));

app.post('/', function(req, res){
   console.log(req.body);
   res.send("recieved your request!");
});

//lage et api for uniform create, read, update , delete

app.get('/api/uniform/add', function(req, res){
    res.render('uniform');
});

app.post('/api/uniform/add', function(req, res){
    const schema = {
        item_type: Joi.string().min(3).required(),
        size: Joi.number().required(),
        item_number: Joi.number().required(),
        status: Joi.string().min(4).required()
    }

    const result = Joi.validate(req.body, schema);
    if (result.error) {
        res.status(400).send(result.error.details[0].message);
        return;
    }

    var uniformInfo = req.body; //Get the parsed information
     
    console.log(req.body);
    /*
    if(!uniformInfo.item_type || !uniformInfo.size || !uniformInfo.item_number){
        res.render('show_message.pug', {
            message: "Sorry, you provided wrong info", type: "error"});
    } else { */

    var newUniform = new Uniform({
        item_type: uniformInfo.item_type,
        size: uniformInfo.size,
        item_number: uniformInfo.item_number,
        status: uniformInfo.status
    });

    newUniform.save(function(err, Uniform){
        if(err)
            res.render('show_message.pug', {message: "Database error", type: "error"});
        else
            res.render('show_message.pug', {
                message: "New uniform item added", type: "success", uniform_item: uniformInfo});
    });
    
});










app.listen(3000);
