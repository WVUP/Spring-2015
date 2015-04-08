//Class variables
var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
var Schema = mongoose.Schema;

//Course schema
var assignmentSchema = new Schema({
	name: String,
	courseNum: String,
	isInCurrentSemester: Boolean,
	courseID: ObjectId,
	studentIDs: [ObjectId],
	comments: [String]
});

//Export the model
var Assignment = mongoose.model('Assignment', assignmentSchema);
module.exports = Assignment;