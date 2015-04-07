//Class variables
var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

//Student schema
module.exports = mongoose.model('Student', {
	firstName: String,
	lastName: String,
	phone: Number,
	courseIDs: [ObjectId],
	assigmentIDs: [ObjectId],
	semesterIDs: [ObjectId],
	comments: [String]
})