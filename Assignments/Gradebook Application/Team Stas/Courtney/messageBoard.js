angular.module('app', []);

angular.module('app').controller('mainCtrl', function($scope) {

})

angular.module('app').directive('messageBoard',function() {

})

angular.module('app').directive('messageBoard', function(){
	return {
		restrict: 'E',
		templateUrl: 'messageBoard.html',
		controller: function($scope)
	{
	}
	}
})