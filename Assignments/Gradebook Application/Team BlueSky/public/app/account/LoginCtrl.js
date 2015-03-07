angular.module('app').controller('LoginCtrl', function($scope, $http, identity, notifier, auth, $location) {
  $scope.identity = identity;
  $scope.signin = function(username, password) {
    auth.authenticateUser(username, password).then(function(success) {
      if(success) {
        notifier.notify('You have successfully Logged In');
      } else {
        notifier.notify('Failed to Log In');
        $scope.mainView.user = '';
      }
    });
  }

  $scope.signout = function() {
    auth.signout().then(function() {
      $scope.mainView.user = '';
      notifier.notify('You have successfully signed out!');
      $location.path('/');
    })
  }
});