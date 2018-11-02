var express = require('express');
var app = express();


//using template pug
//static
app.set('view engine', 'pug');
app.set('views','./views');

app.get('/first_template', function(req, res){
    res.render('first_view');
});

//dynamic pug
app.get('/dynamic_view', function(req, res){
    res.render('dynamic', {
        user: {name: "Marita", age: "43"},
        url:"http://www.tutorialspoint.com"
    });
});


//include footer and header into content pug
app.get('/components', function(req, res){
    res.render('content');
});

//static view
app.use(express.static('public'));
app.get('/static', function(req, res){
    res.render('static');
});

app.get('/hello', function(req, res){
   res.send("Hello world!");
});


app.post('/hello', function(req, res){
    res.send("You just called the post method at '/hello'!\n");
});



var things = require('./things.js');

//both index-tutorialPartUptoForm.js and things.js should be in same directory
app.use('/things', things);


//body parser
var bodyParser = require('body-parser');

//To parse URL encoded data
app.use(bodyParser.urlencoded({ extended: false }))

//To parse json data
app.use(bodyParser.json())

//Coockie parser
var cookieParser = require('cookie-parser');
app.use(cookieParser())


//example dynamix route
app.get('/things/:id([0-9]{5})', function(req, res){
    res.send('id: ' + req.params.id);
});

//Other routes here
app.get('*', function(req, res){
    res.send('Sorry, this is an invalid URL.');
});




app.listen(3000);
