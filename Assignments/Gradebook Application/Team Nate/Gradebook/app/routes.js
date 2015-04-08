var Student = require('./models/student');
var Course = require('./models/course');
var Assignment = require('./models/assignment');
var Semester = require('./models/semester');
var path = require('path');

module.exports = function(app) {
	//Api methods 
	//Get students
	 app.get('/api/students', function(req, res) {

	 });

	//Create and post, kick back index view
	app.post('/api/students', function(req, res) {

	});

	//Delete
	app.delete('/api/students/:student_id', function(req, res) {

	});

	//Index
	// app.get('/', function(req, res) {
	// 	res.sendFile('./index.html');
	// });

	// //Get semesters
	// app.get('/api/semesters', function(req, res) {

	// });

	// //Create and post, kick back index view
	// app.post('/api/semesters', function(req, res) {

	// });

	// //Delete
	// app.delete('/api/students/:semester_id', function(req, res) {

	// });

	// //Index
	// app.get('*', function(req, res) {
	// 	res.sendfile('./public/semesters.html');
	// });

	// //Get courses
	// app.get('/api/courses', function(req, res) {

	// });

	// //Create and post, kick back index view
	// app.post('/api/courses', function(req, res) {

	// });

	// //Delete
	// app.delete('/api/students/:course_id', function(req, res) {

	// });

	// //Index
	// app.get('*', function(req, res) {
	// 	res.sendfile('./public/courses.html');
	// });

	// //Get students
	// app.get('/api/students', function(req, res) {

	// });

	// //Create and post, kick back index view
	// app.post('/api/students', function(req, res) {

	// });

	// //Delete
	// app.delete('/api/students/:student_ID', function(req, res) {

	// });

	// //Index
	// app.get('*', function(req, res) {
	// 	res.sendfile('./public/students.html');
	// });
}