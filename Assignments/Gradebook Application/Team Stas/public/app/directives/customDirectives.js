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

<<<<<<< HEAD
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

=======
.directive('validateEmail', function() {
  var EMAIL_REGEXP = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;

  return {
    require: 'ngModel',
    restrict: '',
    link: function(scope, elm, attrs, ctrl) {
      // only apply the validator if ngModel is present and Angular has added the email validator
      if (ctrl && ctrl.$validators.email) {

        // this will overwrite the default Angular email validator
        ctrl.$validators.email = function(modelValue) {
          return ctrl.$isEmpty(modelValue) || EMAIL_REGEXP.test(modelValue);
        };
      }
    }
  };
});
>>>>>>> d61c16e036ddf3add852e0fbf2555ffe630dcafd
