angular.module('app').controller('AdminManageCtrl', function ($scope, user) {
	$scope.users = user.query();
})