angular.module('Gradebook.Assignments.Ctrl', [
	'Gradebook.Courses.Service',
	'Gradebook.Assignments.Service'
])

.controller('Assignment.Ctrl', ['$scope', '$http', '$state', function ($scope, $http, $state) {
	$scope.viewType = "Assignments";
	$http.get("/api/assignments").success (function (data) {
		$scope.assignmentData = data;
		console.log("Assignments retrieved");
	})
	.error (function () {
		console.log("Assignments not retrieved");
	});

	$scope.remove = function (assignmentId) {
		$http.delete("/api/assignments/" + assignmentId);
		$state.go($state.current, {}, {reload: true});
	};
}])

.controller('Assignment.Create.Ctrl', ['$scope', '$http', '$state', 'Course', function ($scope, $http, $state, Course) {
	$scope.viewName = "Create Assignment";
	$scope.assignmentInfo = {};
	$scope.assignmentInfo.name = "";
	$scope.assignmentInfo.description = "";
	$scope.assignmentInfo.maxPoints = 100;
	$scope.assignmentInfo.comments = "";
	$scope.assignmentInfo.course = "";
	$scope.assignmentInfo.dueDate = ""

	$('#dueDatePicker input').datepicker({

	});

	//Get course names for dropdown
	$http.get('/api/courses').success (function (data) {
		$scope.courses = data;
		console.log("Courses retrieved for dropdown");
	})
	.error (function () {
		console.log("Courses not retrieved");
	})

	//Scope methods
	$scope.cancel = function () { $state.go('assignmentState'); };

	$scope.postData = function () {
		$scope.nameRequired = "";

		if (!$scope.assignmentInfo.name) {
			$scope.nameRequired = "Assignment Name Required";
		}

		if ($scope.assignmentInfo.name) {
			console.log($scope.assignmentInfo);
			$http.post('/api/assignments', $scope.assignmentInfo).success(function (data) {
				console.log("Assignment successfully posted");
				Course.pushAssignment(data.course, data._id).success (function (assignment) {
					console.log("Pushed: " + assignment);
				});
				$state.go('assignmentState');
			})
			.error(function (data) {
				$scope.failed = "Assignment creation failed";
			});
		}
	};
}])

.controller('Assignment.Detail.Ctrl', ['$scope', '$http', '$state', 'Assignment', function ($scope, $http, $state, Assignment) {
	$scope.viewType = "Assignment Details";
	$scope.grades = [];

	$http.get("/api/assignments/" + $state.params.assignment_id).success (function (data) {
		$scope.assignment = data;

		Assignment.getStudents($scope.assignment.course._id).success(function (students) {
			$scope.students = students;
		});
	})
	.error (function () {
		console.log("Assignment not retrieved");
	});

	$scope.enterGrades = function () {
			for(var i=0; i<$scope.students.length; i++) {
				debugger;
				$http.post('/api/' + $scope.students[i]._id + '/' + $state.params.assignment_id + "/grade", {score: $scope.grades[i]}).success(function (data) {
					console.log("Grade entered");
					$state.go('assignmentState', {assignment_id: $state.params.assignment_id});	
				})
				.error(function (err) {
					console.log(err);
				});
			};
			debugger;
			$state.go('assignmentState');
		}
}]);