angular.module('Gradebook.Grades.Ctrl', [
	'Gradebook.Grades.Service'
])

.controller('Grade.Ctrl', ['$scope', '$http', '$state', 'Grade', function ($scope, $http, $state, Grade) {
	$scope.viewType = "Grades";

	$scope.students = [];
	$scope.grade = "";

	$http.get('/api/assignments/' + $state.params.assignment_id).success(function (data) {
		$scope.assignment = data;

		$http.get('/api/courses/' + $scope.assignment.course._id + '/students').success(function (data) {
			debugger;
			for(var i=0; i<data.length; i++) {
				$scope.students.push(data[i]);
			}
		})
		.error(function (err) {
			console.log(err);
		});
	})
	.error(function (err) {
		console.log(err);
	});
}]);