/**
 * Created by Dustin on 4/24/2015.
 */
angular.module('searchDirective', [])

  .directive('searchFilter', function() {
    return {
      restrict: 'E',
      templateUrl: 'app/views/pages/search-filter.html',
      controller: function() {
        var vm = this;

        vm.sortObject = [
          {value: "name", text: "Sort by Name"},
          {value: "dateDue", text: "Sort by Due Date"}
        ];

        vm.sortOrder = vm.sortObject[1].value;  //name
        console.log(vm.sortOrder);
      },
      controllerAs: 'sortOptions'
    };
  });
