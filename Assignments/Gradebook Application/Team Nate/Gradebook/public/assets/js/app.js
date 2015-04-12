var gradebookApp = angular.module('gradebook', ['ui.router']);

gradebookApp.controller('HomeController', ['$scope', '$http', function ($scope, $http) { 
	$scope.viewType = "Semester";
	
	var donut = Morris.Donut({
		element: 'currentBreakdown',
		data: [
			{label: "CS 329", value: 12},
			{label: "CS 330", value: 23},
			{label: "CS 331", value: 11},
			{label: "CS 332", value: 9},
			{label: "CS 333", value: 4}
		],
		colors: [
			'#ff865c',
			'#ffd777',
			'#43b1a9',
			'#68dff0',
			'#797979'
		],
		resize: true
	});
}]);

//Course controllers
gradebookApp.controller('CourseController', ['$scope', '$http', function ($scope, $http) {
	$scope.viewType = "Courses";
	$http.get("/api/courses").success (function (data){
		$scope.courseData = data;
		console.log("Courses retrieved");
	})
	.error (function(){
		console.log("Courses not retrieved");
	});
}]);

gradebookApp.controller('CourseCreateCtrl', ['$scope', '$http', '$state', function ($scope, $http, $state) {
	$scope.viewName = "Create Course";
	$scope.courseInfo = {};
	$scope.courseInfo.name = "";
	$scope.courseInfo.courseNum = "";
	$scope.courseInfo.comments = "";

	//Scope methods
	$scope.cancel = function () { $state.go('courseState'); };

	$scope.remove = function (courseId) {
		$http.delete("/api/courses/" + courseId);
		$state.go('courseState');
	};

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
}]);

//Student controllers
gradebookApp.controller('StudentCtrl', ['$scope', '$http', function ($scope, $http) {
	$scope.viewType = "Students";
	$http.get("/api/students").success (function (data) {
		$scope.studentData = data;
		console.log("Students retrieved");
	})
	.error (function () {
		console.log("Students not retrieved");
	});
}]);

gradebookApp.controller('StudentCreateCtrl', ['$scope', '$http', '$state', function ($scope, $http, $state) {
	$scope.viewName = "Create Student";
	$scope.studentInfo = {};
	$scope.studentInfo.firstName = "";
	$scope.studentInfo.lastName = "";
	$scope.studentInfo.phoneNumber = "";
	$scope.studentInfo.email = "";
	$scope.studentInfo.comments = "";

	//Scope methods
	$scope.cancel = function () { $state.go('studentState'); };

	$scope.remove = function (studentId) {
		$http.delete("/api/students/" + studentId);
		$state.go('studentState');
	};

	$scope.postData = function () {
		$scope.nameRequired = "";
		$scope.emailRequired = "";

		if (!$scope.studentInfo.firstName || !$scope.studentInfo.lastName) {
			$scope.nameRequired = "Student First and Last Name Required";
		}

		if (!$scope.studentInfo.email) {
			$scope.emailRequired = "Email Required";
		}

		if ($scope.studentInfo.firstName && $scope.studentInfo.lastName && $scope.studentInfo.email) {
			console.log($scope.studentInfo);
			$http.post('/api/students', $scope.studentInfo).success(function (data) {
				console.log("Student successfully posted");
				$state.go('studentState');
			})
			.error(function (data) {
				$scope.failed = "Student creation failed";
			});
		}
	};
}]);

//UI Routes
gradebookApp.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider
		.state('homeState', {
			url: "",
			templateUrl: "../../app/views/home.html",
			controller: 'HomeController'
		})

		.state('courseState', {
			url: "/courses",
			templateUrl: "../../app/views/courses/index.html",
			controller: 'CourseController'
		})

		.state('courseCreate', {
			url: "/courses/create",
			templateUrl: "../../app/views/courses/create.html",
			controller: 'CourseCreateCtrl'
		})

		.state('studentState', {
			url: "/students",
			templateUrl: "../../app/views/students/index.html",
			controller: "StudentCtrl"
		})

		.state('studentCreate', {
			url: "/students/create",
			templateUrl: "../../app/views/students/create.html",
			controller: "StudentCreateCtrl"
		})
});
