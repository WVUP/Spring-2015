/**
 * Created by Dustin on 4/25/2015.
 */
angular.module('app').controller('searchPageCtrl', function($scope, searchPage) {
  $scope.search = searchPage.query();


})