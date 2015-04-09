module.exports = function(app, express) {
	//Use express router
	var apiRouter = express.Router();

	//Course routes
	require ('./courseRoutes', apiRouter);

	//Kick it out
	return apiRouter;
};