/**
 * Created by Dustin on 4/21/2015.
 */
angular.module('sortDirective', [])

  .directive('sort', function() {
    return {
      restrict: 'E',
      templateUrl: 'app/views/pages/sort-order.html',
      controller: function() {
        var vm = this;

        vm.sortObject = [
          {value: "name", text: "Sort by Name"},
          {value: "dateDue", text: "Sort by Due Date"}
        ];

        vm.sortOrder = vm.sortObject[1].value;
        console.log(vm.sortOrder);
      },
      controllerAs: 'sortOptions'
    };
  });
