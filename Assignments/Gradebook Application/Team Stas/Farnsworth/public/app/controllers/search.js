/**
 * Created by Dustin on 4/26/2015.
 */
angular.module('search', ['searchFactory'])

.controller('searchController')
{
  var Search = require('mongoose').model('User');

// TODO get classes and assignments once functional
  exports.getSearch = function (req, res) {
    Search.find({}).exec(function (err, collection) {
      res.send(collection);
    })
  };
}