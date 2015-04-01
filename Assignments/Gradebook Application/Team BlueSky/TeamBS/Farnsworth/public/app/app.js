/**
 * angular application
 * client side js file
 */


/**
 * define angular module
 * @param string; app module
 * @param array of strings; depends on these modules
 */
angular.module('app', ['ngResource', 'ngRoute']);


/**
 * define client side routes
 */
angular.module('app').config(function($routeProvider, $locationProvider) {
	$locationProvider.html5Mode(true); // turn on html5 mode routing
	$routeProvider
		.when('/', { templateUrl: '/partials/main', controller: 'mainCtrl'});
/**             ^                           ^                  ^
 * route to the root of application; server side route; defines controller
 */
});


/**
 * main controller ( still needs its own file )
 */
angular.module('app').controller('mainCtrl', function($scope) {
    /**
     * stick variable on scope to bind
     * @type {string}; content for placeholder in partials main file
     */
    $scope.myVar = "This text is displayed from our Angular public/app/app.js file.";
});