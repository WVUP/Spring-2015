/**
 * Created by Dustin on 4/26/2015.
 */
var SearchUsers = require('mongoose').model('User');

// TODO get classes and assignments once functional
exports.getSearch = function(req, res) {
  SearchUsers.find({}).exec(function(err, collection) {
    res.send(collection);
  })
};