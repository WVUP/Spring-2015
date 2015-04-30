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
}