var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');


module.exports = {
	development: {
		rootPath: rootPath,
		db: 'mongodb://localhost/gradebook',
		port: process.env.PORT || 3000
	},
	production: {
		rootPath: rootPath,
		db: 'mongodb://admin:cs329@ds051851.mongolab.com:51851/gradebook',
		port: process.env.PORT || 80
	}
}