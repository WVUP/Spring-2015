/**
 * Created by Dustin on 4/25/2015.
 */
var search = require('../controllers/search');

module.exports = function (app) {
  app.get('/api/search', search.getSearch);
}