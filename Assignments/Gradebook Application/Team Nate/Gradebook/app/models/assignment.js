//Class variables
var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

//Course schema
module.exports = mongoose.model('Assignment', {
	name: String,
	courseNum: String,
	isInCurrentSemester: Boolean,
	courseID: ObjectId,
	studentIDs: [ObjectId],
	comments: [String]
})