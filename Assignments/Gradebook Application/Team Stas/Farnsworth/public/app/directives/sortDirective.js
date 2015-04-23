angular.module('sortDirective', [])

  .directive('sortOrder', function() {
    return {
      restrict: 'E',
      templateUrl: 'app/views/pages/sort/sort-order.html',
      controller: function() {
        var vm = this;

        vm.sortOptions = [
          {value: "name", text: "Sort by Name"},
          {value: "dateDue", text: "Sort by Due Date"}
        ];

        vm.sortOrder = vm.sortOptions[1].value;  //name
        console.log(vm.sortOrder);
      },
      controllerAs: 'sortOptions'
    };
  });
