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
            //initial data to test
            $scope.students = [{
                id: 345632145,
                major: 'software',
                fName: 'Santi',
                lName: 'Cazorla',
                phone: '3034567854',
                email: 'scazorla@example.com',
            },
            {
                id: 123456789,
                major: 'test',
                fName: 'Vladimir',
                lName: 'Putin',
                phone: '3044827421',
                email: 'vputin@example.com',
            },
            
            {
                id: 345632145,
                major: 'software',
                fName: 'Santi',
                lName: 'Cazorla',
                phone: '3034567854',
                email: 'scazorla@example.com',
            },
            {
                id: 123456789,
                major: 'test',
                fName: 'Vladimir',
                lName: 'Putin',
                phone: '3044827421',
                email: 'vputin@example.com',
            },
            {
                id: 345632145,
                major: 'software',
                fName: 'Santi',
                lName: 'Cazorla',
                phone: '3034567854',
                email: 'scazorla@example.com',
                circle: "SC"
            },
            {
                id: 123456789,
                major: 'test',
                fName: 'Vladimir',
                lName: 'Putin',
                phone: '3044827421',
                email: 'vputin@example.com',
            },

            {
                id: 345632145,
                major: 'software',
                fName: 'Santi',
                lName: 'Cazorla',
                phone: '3034567854',
                email: 'scazorla@example.com',
            },
            {
                id: 123456789,
                major: 'test',
                fName: 'Vladimir',
                lName: 'Putin',
                phone: '3044827421',
                email: 'vputin@example.com',
            }];
            SetStorage();
        }

        //getting error
        //https://github.com/angular/angular.js/issues/6154
        $scope.getStyle = function () {
            return { top: GenerateTopMargin(), left: GenerateLeftMargin() }
        }
            
        $scope.saveStudent = function (s, studentForm) {
            if (studentForm.$valid) {
                $scope.students.push(s);
                SetStorage();
                $scope.student = '';
                ScrollDown('#students')
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

        function ScrollDown(folks) {
            $(folks).animate({ scrollTop: $(folks).prop('scrollHeight') }, 1500);
        }

        function GenerateTopMargin() {
            return Math.floor(Math.random() * (1400 - 890 + 1) + 890) + 'px';
        }

        function GenerateLeftMargin() {
            return Math.floor(Math.random() * (600 - 0 + 200) + 200) + 'px';
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