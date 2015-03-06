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
	uName: String,
});

var User = mongoose.model('User', userSchema);

User.find({}).exec(function (err, collection) {
	if (collection.length === 0) {
		User.create({fName: 'Stas', lName: 'Ivash', uName: 'xstiv07'});
		User.create({fName: 'Sam', lName: 'Ivash', uName: 'sammy'});
		User.create({fName: 'Billy', lName: 'Jones', uName: 'bjones'});
	};
})