var Course = require('../models/course');
var User = require('../models/user');
var Assignment = require('../models/assignment');

module.exports = function(apiRouter) {
	apiRouter.route('/assignments')

		//Get a collection of assignments
		.get(function(req, res) {
			Assignment.find(function(err, assignments) {
				if (err)
					res.send(err);
				else{
					res.json(assignments);
				}
			});
		})

		//Create a new course
		.post(function(req, res) {
			var newAssignment = new Assignment();

			newAssignment.name = req.body.name;
			newAssignment.courseNum = req.body.courseNum;
			newAssignment.isInCurrentSemester = true;
			newAssignment.dateCreated = Date.now();
			newAssignment.dateModified = Date.now();
			newAssignment.courseId = [];
			newAssignment.studentIds = [];
			newAssignment.comments = [];

			//Save to DB
			newAssignment.save(function(err) {
				if (err)
					res.send(err);
				else
					res.json({ message: "Course " + newAssignment.name + " successfully created" });
			});
		});
}