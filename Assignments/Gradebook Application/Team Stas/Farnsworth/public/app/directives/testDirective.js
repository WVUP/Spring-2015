/**
 * Created by Dustin on 4/26/2015.
 */
angular.module('testDirective', [])

  .directive('test', function() {
    return {
      restrict: 'E',
      templateUrl: 'app/views/pages/test.html',
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
  });