var student = require('./models/gradebook');

module.exports = function(app) {

	app.get('/api/students', function(req, res){

	});

	app.post('/api/students', function(req, res){

	});

	app.get('/api/courses', function(req, res){

	});

	app.get('api/assignments', function(req, res){

	});

	app.get('*', function(req, res){
		res.sendFile('./index.html');
	});
};