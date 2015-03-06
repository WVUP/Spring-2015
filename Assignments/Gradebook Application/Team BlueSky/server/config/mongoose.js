var mongoose = require('mongoose');

module.exports = function (config) {
	mongoose.connect(config.db);

	var db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error ...'));
	db.once('open', function () {
		console.log('gradebook db is opened');
	})
}
var userSchema = mongoose.Schema({
	fName: String,
	lName: String,
	username: String
});

var User = mongoose.model('User', userSchema);

User.find({}).exec(function (err, collection) {
	if (collection.length === 0) {
		User.create({fName: 'Stas', lName: 'Ivash', username: 'xstiv07'});
		User.create({fName: 'Sam', lName: 'Ivash', username: 'sammy'});
		User.create({fName: 'Billy', lName: 'Jones', username: 'bjones'});
	};
})