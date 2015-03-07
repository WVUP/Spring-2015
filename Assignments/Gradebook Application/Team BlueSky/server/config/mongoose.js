var mongoose = require('mongoose')
	crypto = require('crypto');

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
		username: String,
		salt: String,
		hashed_pwd: String,
		roles: [String]
	});

	userSchema.methods = {
		authenticate: function (passwordToMatch) {
			return hashPwd(this.salt, passwordToMatch) === this.hashed_pwd;
		}
	}

	var User = mongoose.model('User', userSchema);

	User.find({}).exec(function (err, collection) {
		if (collection.length === 0) {
			var salt, hash;
			salt = createSalt();
			hash = hashPwd(salt, 'xstiv07');
			User.create({fName: 'Stas', lName: 'Ivash', username: 'xstiv07', salt: salt, hashed_pwd: hash, roles: ['admin'] });
			salt = createSalt();
			hash = hashPwd(salt, 'sammy');
			User.create({fName: 'Sam', lName: 'Ivash', username: 'sammy', salt: salt, hashed_pwd: hash, roles: ['instructor']});
			salt = createSalt();
			hash = hashPwd(salt, 'bjones');
			User.create({fName: 'Billy', lName: 'Jones', username: 'bjones', salt: salt, hashed_pwd: hash});
  		}
	}
);

function createSalt() {
	return crypto.randomBytes(128).toString('base64');
}

function hashPwd (salt, pwd) {
	var hmac = crypto.createHmac('sha1', salt);
	return hmac.update(pwd).digest('hex');
}