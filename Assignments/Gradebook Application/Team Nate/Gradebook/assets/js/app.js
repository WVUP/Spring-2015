var gradebookApp = angular.module('gradebook', ['ui.router']);

gradebookApp.controller('HomeController', ['$scope', function ($scope) { 
	$scope.viewType = "Semester";
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
			url: "/courses",
			templateUrl: "././partials/courses.html"
		})

		.state('courseState.list', {
			url: "courses/list",
			templateUrl: "././partials/courses.list.html",
			controller: function($scope) {
				$scope.courses = gradebookApp.factory;
			}
		});
})
