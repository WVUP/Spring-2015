var Student = require('../models/student');
var User = require('../models/user');

module.exports = function(apiRouter) {
	apiRouter.route('/students')

		//Get a collection of students
		.get(function(req, res) {
			Student.find(function (err, students) {
				if (err)
					res.send(err);
				else{
					res.json(students);
				}
			});
		})

		//Create a new student
		.post(function(req, res) {
			var newStudent = new Student();

			newStudent.firstName = req.body.firstName;
			newStudent.lastName = req.body.lastName;
			newStudent.phoneNumber = req.body.phoneNumber;
			newStudent.email = req.body.email;
			newStudent.dateCreated = Date.now();
			newStudent.dateModified = Date.now();
			newStudent.semesters = [];
			newStudent.courses = [];
			newStudent.assignments = [];
			newStudent.comments.push(req.body.comments || []);

			//Save to DB
			newStudent.save(function(err) {
				if (err)
					res.send(err);
				else
					res.json(newStudent);
			});
		});

	//Operations for existing students
	apiRouter.route('/students/:student_id')

		.get(function (req, res) {
			Student.findOne({_id: req.params.student_id})
			.populate('courses assignments')
			.exec(function (err, student) {
				if (err)
					res.send(err);
				else{
					res.json(student);
				};
			});
		})

		//Delete an existing student
		.delete(function (req, res) {
			Student.findByIdAndRemove(req.params.student_id, function (err, delStudent) {
				console.log(delStudent);
				if (err)
					res.send(err);
				delStudent.remove();
			}).then(function() {
				Student.find(function (err, students) {
					res.json({ message: 'Student deleted' });
				});
			});
		});

	//Calls for populating fields

}