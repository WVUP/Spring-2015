//Class variables
var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

//Course schema
module.exports = mongoose.model('Course', {
	name: String,
	courseNum: String,
	isInCurrentSemester: Boolean,
	semesterIDs: [ObjectId],
	studentIDs: [ObjectId],
	assignmentIDs: [ObjectId],
	comments: [String]
});