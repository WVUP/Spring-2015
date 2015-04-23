angular.module('Gradebook.Grades.Service', [])

.factory('Grade', function ($http) {
	var Grade = {};

	Grade.getStudents = function (assignment_id) {
		debugger;
		$http.get('/api/assignments/' + assignment_id + '/course')
		
		.success(function (course) {
		 	debugger;
		 	return $http.get('/api/course/' + course.course + '/students');
		})
		.error(function (err) {
			debugger;
			return err;
		});
	};

	return Grade;
});