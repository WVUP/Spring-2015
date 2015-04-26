/**
 * Created by Dustin on 4/25/2015.
 */
angular.module('app').controller('searchPageCtrl', function(vm, searchPage) {
  vm.search = searchPage.query();
})