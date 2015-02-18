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
        var students = sessionStorage.getItem("students");
        $scope.students = JSON.parse(students);
        if ($scope.students == null) {
            $scope.students = [];
        }
            
        $scope.saveStudent = function (s, studentForm) {
            if (studentForm.$valid) {
                $scope.students.push(s);
                SetStorage();
                $scope.student = '';
            } else {
                $('#validation-msg').css("display", "block");
            };
        }

        $scope.deleteStudent = function (s) {
            var index = $scope.students.indexOf(s)
            $scope.students.splice(index, 1)
            SetStorage();
        }

        $scope.editStudent = function (s) {
            SetStorage();
        }

        function SetStorage() {
            $window.sessionStorage.setItem('students', JSON.stringify($scope.students));
        }
    }])

    // Path: /error/404
    .controller('Error404Ctrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'Error 404: Page Not Found';
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }]);