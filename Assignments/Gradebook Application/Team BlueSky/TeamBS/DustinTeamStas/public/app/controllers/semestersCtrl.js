(function () {
  var app = angular.module('semestersMod', []);

  app.controller('SemesterController', function () {
    this.terms = semesters;
  });

  var semesters = [{
    name: 'Summer',
    year: 2012,
    place: 1
  }, {
    name: 'Fall',
    year: 2012,
    place: 0
  }, {
    name: 'Spring',
    year: 2012,
    place: 3
  }, {
    name: 'Fall',
    year: 2014,
    place: 0
  }, {
    name: 'Summer',
    year: 2014,
    place: 1
  }, {
    name: 'Spring',
    year: 2014,
    place: 2
  }, {
    name: 'Fall',
    year: 2013,
    place: 0
  }, {
    name: 'Summer',
    year: 2013,
    place: 1
  }, {
    name: 'Spring',
    year: 2013,
    place: 2
  }];
})();