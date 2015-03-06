angular.module('app').controller('MainCtrl', function($scope, $location){
	$scope.go = function (view) {
		$location.path(view);
	};
});