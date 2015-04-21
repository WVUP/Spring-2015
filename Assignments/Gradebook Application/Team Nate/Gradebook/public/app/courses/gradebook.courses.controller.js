angular.module('Gradebook.Courses.Ctrl', [
	'Gradebook.Courses.Service'
])

.controller('Course.Ctrl', ['$scope', '$http', '$state', function ($scope, $http, $state) {
	$scope.viewType = "Courses";
	$http.get("/api/courses").success (function (data){
		$scope.courseData = data;
		console.log("Courses retrieved");
	})
	.error (function(){
		console.log("Courses not retrieved");
	});

	$scope.remove = function (courseId) {
		$http.delete("/api/courses/" + courseId);
		$state.go($state.current, {}, {reload: true});
	};
}])

.controller('Course.Create.Ctrl', ['$scope', '$http', '$state', 'Course', function ($scope, $http, $state, Course) {
	$scope.viewName = "Create Course";
	$scope.courseInfo = {};
	$scope.courseInfo.name = "";
	$scope.courseInfo.courseNum = "";
	$scope.courseInfo.comments = "";

	//Arrays for student addition
	$scope.courseInfo.studentsIn = [];
	$scope.courseInfo.studentsOut = [];
	Course.getAllStudents().success (function (data) {
		for (var i=0; i<data.length; i++) { 
			$scope.courseInfo.studentsOut.push(data[i]);
		}
	});

	//Scope methods
	$scope.cancel = function () { $state.go('courseState'); };

	$scope.toggleIn = function (student, i) {
		$scope.courseInfo.studentsIn.push($scope.courseInfo.studentsOut.splice(i, 1)[0]);
	}

	$scope.toggleOut = function (student, i) {
		$scope.courseInfo.studentsOut.push($scope.courseInfo.studentsIn.splice(i, 1));
	}

	$scope.postData = function () {
		$scope.nameRequired = "";
		$scope.numRequired = "";

		if (!$scope.courseInfo.name) {
			$scope.nameRequired = "Course Name Required";
		}

		if (!$scope.courseInfo.courseNum) {
			$scope.numRequired = "Course Number Required";
		}

		if ($scope.courseInfo.name && $scope.courseInfo.courseNum) {
			console.log($scope.courseInfo);
			$http.post('/api/courses', $scope.courseInfo).success(function (data) {
				console.log("Course successfully posted");
				$state.go('courseState');
			})
			.error(function (data) {
				$scope.failed = "Course creation failed";
			});
		}
	};
}])

.controller('Course.Detail.Ctrl', ['$scope', '$http', '$state', '$stateParams', function ($scope, $http, $state) {
	$scope.viewType = "Course Details";
	$scope.pointTotal = 0;

	$http.get("/api/courses/" + $state.params.course_id).success (function (data) {
		$scope.course = data;
		for (var i=0; i<$scope.course.assignments.length; i++) {
			$scope.pointTotal += $scope.course.assignments[i].maxPoints;
		}
		console.log(data);
	})
	.error (function () {
		console.log("Course not retrieved");
	});
}]);