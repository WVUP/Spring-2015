var gradebookApp = angular.module('gradebook', ['ui.router']);

gradebookApp.controller('HomeController', ['$scope', function ($scope) { 
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

gradebookApp.controller('CourseController', ['$scope', function ($scope) {
	$scope.viewType = "Courses";
}]);

gradebookApp.factory('dataFactory', function ($http) {
	var courseData = {content:null};

	$http.get('././courses.json').success(function(data) {
		courseData.content = data;
	});

	return courseData;
}); 

gradebookApp.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("");

	$stateProvider
		.state('homeState', {
			url: "",
			templateUrl: "././partials/home.html",
			controller: 'HomeController'
		})

		.state('courseState', {
			url: "partials/courses.html",
			templateUrl: "././partials/courses.html",
			controller: 'CourseController'
		})

		.state('courseState.list', {
			url: "courses/list",
			templateUrl: "././partials/courses.list.html",
			controller: function($scope) {
				$scope.courses = gradebookApp.factory;
			}
		});
})
