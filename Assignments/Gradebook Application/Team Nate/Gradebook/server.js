//Class variables
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var mongo = require('mongodb');
var port = process.env.PORT || 8080;
var database = require('./config/database');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

//Configuration
mongoose.connect(database.url);

app.use(express.static(__dirname + '/public'));                 
app.use(morgan('dev'));                                         
app.use(bodyParser.urlencoded({'extended':'true'}));            
app.use(bodyParser.json());                                     
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 
app.use(methodOverride());

//Routing
require('./app/routes')(app);

//Start application with node
app.listen(port);
console.log("App listening on port " + port);