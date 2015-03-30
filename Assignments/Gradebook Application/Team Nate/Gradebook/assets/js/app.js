var gradebookApp = angular.module('gradebook', ['ui.router']);

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
			templateUrl: "././partials/home.html"
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
