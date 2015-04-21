angular.module('Gradebook.Assignments.Ctrl', [

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

.controller('Assignment.Create.Ctrl', ['$scope', '$http', '$state', 'courseFactory', function ($scope, $http, $state, courseFactory) {
	$scope.viewName = "Create Assignment";
	$scope.assignmentInfo = {};
	$scope.assignmentInfo.name = "";
	$scope.assignmentInfo.description = "";
	$scope.assignmentInfo.maxPoints = "";
	$scope.assignmentInfo.comments = "";
	$scope.assignmentInfo.course = "";
	$scope.assignmentInfo.dueDate = "";

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
				courseFactory.pushAssignment(data.course, data._id).success (function (data) {
					console.log("Pushed: " + data);
				});
				$state.go('assignmentState');
			})
			.error(function (data) {
				$scope.failed = "Assignment creation failed";
			});
		}
	};
}])

.controller('Assignment.Detail.Ctrl', ['$scope', '$http', '$state', function ($scope, $http, $state) {
	$scope.viewType = "Assignment Details";

	$http.get("/api/assignments/" + $state.params.assignment_id).success (function (data) {
		debugger;
		$scope.assignment = data;
		console.log(data);
	})
	.error (function () {
		console.log("Assignment not retrieved");
	});
}]);