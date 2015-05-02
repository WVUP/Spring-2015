angular.module('Gradebook.Assignments.Service', [])

.factory('Assignment', function ($http, $state) {
	var Assignment = {};

	Assignment.getGrades = function (assignment_id) {
		return $http.get("/api/" + assignment_id + "/grades");
	};

	return Assignment;
});