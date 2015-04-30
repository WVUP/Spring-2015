var Course = require('../models/course');
var Student = require('../models/student');
var User = require('../models/user');
var Grade = require('../models/grade');

module.exports = function(apiRouter) {
	apiRouter.route('/assignments/:assignment_id/grades')

		//Get a collection of courses
		.get(function (req, res) {
			var courseQuery = 
			Course.find().
			populate('assignments students').
			exec(function (err, courses) {
				if (err)
					res.send(err);
				else{
					res.json(courses);
				}
			});
		});

	apiRouter.route('/grades/:student_id/:assignment_id')

		//Create a new assignment
		.post(function(req, res) {
			var newGrade = new Grade();

			newGrade.student = req.params.student_id;
			newGrade.assignment = req.params.assignment_id;
			newGrade.points = req.body;
			//newGrade.comments.push(req.body.comments || []);

			//Save to DB
			newGrade.save(function (err) {
				if (err)
					res.send(err);
				else{
					res.json(newGrade);
				}
			});
		});
}