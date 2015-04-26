/**
 * Created by Dustin on 4/25/2015.
 */
angular.module('app').factory('mvCourse', function($resource) {
  var CourseResource = $resource('/api/search/:_id', {_id: "@id"}, {
    update: {method:'PUT', isArray:false}
  });

  return CourseResource;
});