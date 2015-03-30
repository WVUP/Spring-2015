var gradebookApp = angular.module('gradebook', ['ngRoute']);

gradebookApp.controller('CourseController', ['$scope', function ($scope) {
	$scope.viewType = "Courses";
}]);
