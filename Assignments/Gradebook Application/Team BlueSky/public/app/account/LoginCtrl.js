angular.module('app').controller('LoginCtrl', function($scope, $location){
	$scope.signin = function (username, password) {
		console.log(username + " and " + password)
	};
});