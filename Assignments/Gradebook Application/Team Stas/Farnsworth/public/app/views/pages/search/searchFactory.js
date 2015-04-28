/**
 * Created by Dustin on 4/25/2015.
 */
angular.module('app').factory('search', function($resource) {
  var SearchResource = $resource('/api/search/:_id', {_id: "@id"}, {
    update: {method:'PUT', isArray:false}
  });

  return SearchResource;
});