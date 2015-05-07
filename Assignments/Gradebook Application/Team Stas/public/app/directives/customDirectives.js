angular.module('customDirectives', [])

.directive('scrollOnClick', function($window) {
	var w = angular.element($window);
  return {
    restrict: 'A',
    link: function(scope, $elm) {
      $elm.on('click', function() {
        $("body, html").animate({scrollTop: w.height()}, 2000);
      });
    }
  }
})

/**
 * Created by Dustin on 4/24/2015.
 */
  .directive('searchFilter', function() {
  return {
    restrict: 'E',
    templateUrl: 'app/views/search-filter.html',
    controller: function() {
      var vm = this;

      vm.sortObject = [
        {value: "name", text: "Sort by Name"},
        {value: "dateDue", text: "Sort by Due Date"}
      ];

      vm.sortOrder = vm.sortObject[1].value;
    },
    controllerAs: 'sortOptions'
  };
})

/**
 * Created by Dustin on 4/21/2015.
 */
  .directive('sort', function() {
  return {
    restrict: 'E',
    templateUrl: 'app/views/sort-order.html',
    controller: function() {
      var $scope = this;
      $scope.sortObject = [
        {value: "name", text: "Sort by Name"},
        {value: "dateDue", text: "Sort by Due Date"}
      ];

      $scope.sortOrder = $scope.sortObject[1].value;
      console.log($scope.sortOrder);
    },
    controllerAs: 'sortOptions'
  };
})

/**
 * Created by Dustin on 4/26/2015.
 */
  .directive('test', function() {
  return {
    restrict: 'E',
    templateUrl: 'app/views/pages/test.html',
    require: 'searchFilter',
    controller: function() {
      var vm = this;

      vm.sortObject = [
        {value: "name", text: "Sort by Name"},
        {value: "dateDue", text: "Sort by Due Date"}
      ];

      vm.sortOrder = vm.sortObject[1].value;
    },
    controllerAs: 'testCtrl'
  };
})

