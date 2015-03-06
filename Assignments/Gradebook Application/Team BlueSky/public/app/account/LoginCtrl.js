angular.module('app').controller('LoginCtrl', function($scope, $location, $http, identity, notifier, auth){
	$scope.signin = function (username, password) {
		auth.authenticateUser(username, password).then(function (success) {
			if(success)
				notifier.notify('You have successfully Logged In')
			else
				notifier.notify('Failed to Log In')
		})
	};

	$scope.identity = identity;
});