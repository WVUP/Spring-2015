angular.module('app', []);

angular.module('app').controller('mainCrtl', function($scope){

})

angular.module('app').directive('myProfile', function(){
    return{
        restrict: 'E',
        templateUrl: 'myProfile.html',
        controller: function($scope){

        }
    }
})
