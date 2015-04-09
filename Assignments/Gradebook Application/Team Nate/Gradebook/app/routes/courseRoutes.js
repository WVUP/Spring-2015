var Course = require('../models/course');
var User = require('../models/user');

module.exports = function(apiRouter) {
	apiRouter.route('/courses')

		//Get a collection of courses
		.get(function(req, res) {
			Course.find(function(err, courses) {
				if (err)
					res.send(err);
				else{
					res.json(classes);
				}
			});
		})

		//Create a new course
		.post(function(req, res) {
			var newCourse = new Course();

			newCourse.name = req.body.name;
			newCourse.courseNum = req.body.courseNum;
			newCourse.isInCurrentSemester = true;
			newCourse.dateCreated = Date.now();
			newCourse.dateModified = Date.now();
			newCourse.semesterIds = [];
			newCourse.studentIds = [];
			newCourse.assignmentIds = [];
			newCourse.comments = [];

			//Save to DB
			newCourse.save(function(err) {
				if (err)
					res.send(err);
				else
					res.json({ message: "Course " + newCourse.name + " successfully created" });
			});
		});
}