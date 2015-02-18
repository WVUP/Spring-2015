'use strict';

// Google Analytics Collection APIs Reference:
// https://developers.google.com/analytics/devguides/collection/analyticsjs/

angular.module('app.controllers', [])

    // Path: /
    .controller('HomeCtrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'Student Registration';
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])

    .controller('StudentsHandlerCtrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.students = GetStorage();

        $scope.saveStudent = function (s) {
            $scope.students.push(s);
            $scope.student = '';
            $window.sessionStorage.setItem($scope.students, JSON.stringify(s))
            console.log($scope.students)
        }

        $scope.deleteStudent = function (s) {
            var index = $scope.students.indexOf(s)
            $scope.students.splice(index, 1)
            $window.sessionStorage.removeItem(s)
            console.log($scope.students)
        }

        function GetStorage() {
            var json = [];
            $.each($window.sessionStorage, function (x, y) {
                json.push(angular.fromJson(y));
            });
            return json;
        }
    }])

    // Path: /error/404
    .controller('Error404Ctrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'Error 404: Page Not Found';
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }]);