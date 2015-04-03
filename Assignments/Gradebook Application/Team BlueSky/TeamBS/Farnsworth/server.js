/**
 * node application
 */

/**
 * brings in modules for express middleware
 * @module stylus - library used to serve css files
 * @module morgan - express module for logging
 * @type {*|exports}
 */
var express = require('express'),
    stylus = require('stylus'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');


/**
 * sets the value of the node environment for development or production
 * @type {string|*}
 */
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';


/**
 * express application call
 */
var app = express();


/**
 * compiles stylus to css and serves css file
 * @param str site.styl file
 * @param path request for site.css file
 * @returns {*} compiled site.css files
 */
function compile(str, path) {
    return stylus(str).set('filename', path);
}


/**
 * inline express configuration section
 */

/**
 * code for using jade views instead of html
 * server\views\partials\index.jade
 * sets path to requested jade view from current directory
 * @var app  express()
 * @param string views for templating
 * @param __dirname + string - current directory + location of all views
 */
app.set('views', __dirname + '/server/views');
/**
 * sets view engine to jade
 * @var app express()
 * @param string templating engine
 * @param string templating engine use jade
 */
app.set('view engine', 'jade');



/**
 * code for using html instead of jade views
 * server\html\index.html
 * sets path to requested html file from current directory
 * @var app  express()
 * @param __dirname + string - current directory + static routing to html file
 */
/*
app.use(express.static(__dirname + '/server/html/'));
*/


/**
 * turns on express logging
 * @param string pass 'dev' to morgan logger
 */
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


/**
 *  configures stylus middleware
 */
app.use(stylus.middleware(
    {
        /**
         * current directory + public folder
         */
        src: __dirname + '/public',
        /**
         * call to stylus compile function
         */
        compile: compile
    }
));
/**
 * static middleware routing to public directory
 */
app.use(express.static(__dirname + '/public'));


/**
 * sets mongoose connection string
 */
mongoose.connect('mongodb://localhost/vls');


/**
 * uses mongoose to connects to mongodb
 * logs connection error or success
 * @type {Mongoose.connection|*|opts.connection}
 */
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error...'));
db.once('open', function callback() {
    console.log('VLS db opened');
});


/**
 * renders partials
 */
app.get('/partials/:partialPath', function (req, res) {
    //       ^          ^
    // request for file in partials folder; request placeholder for any file requested

    // renders file from the partial folder by appending file name from request placeholder
    res.render('partials/' + req.params.partialPath);
});


/**
 * route that delivers the index page - * can cause infinite digests error
 * any request that gets to this point is handled by client side.
 * server side doesn't handle routes or handing out 404 error notices
 */
app.get('*', function (req, res) {
    res.render('index');
});


/**
 * tells the node server port to listen for requests
 * logs success
 * @type {number}
 */
var port = 3030;
app.listen(port);
console.log('Listening on port ' + port + '...');