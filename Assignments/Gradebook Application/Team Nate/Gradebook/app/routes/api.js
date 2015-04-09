module.exports = function(app) {
	//Use express router
	var express = require('express');
	var apiRouter = express.Router();

	//Course routes
	require ('./courseRoutes', apiRouter);

	//Kick it out
	return apiRouter;
};