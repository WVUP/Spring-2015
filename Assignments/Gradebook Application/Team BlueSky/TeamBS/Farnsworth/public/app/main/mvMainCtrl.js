/**
 * Created by Dustin on 4/1/2015.
 */
/**
 * main controller ( still needs its own file )
 */
angular.module('app').controller('mvMainCtrl', function($scope) {
    $scope.users = [
        {fname: 'Aaron', lname: 'Freeland', admin: true, course: 'CS 329'},
        {fname: 'Dustin', lname: 'Farnsworth', admin: false, course: 'CS 329'},
        {fname: 'Alex', lname: 'Kanios', admin: false, course: 'CS 329'},
        {fname: 'Courtney', lname: 'Linville', admin: false, course: 'CS 329'},
        {fname: 'Stas', lname: 'Ivash', admin: false, course: 'CS 329'},
        {fname: 'Geronimo', lname: 'Zeroni', admin: false, course: 'CS 329'}
    ]
});