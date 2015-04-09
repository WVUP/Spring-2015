//Class variables
var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
var Schema = mongoose.Schema;

//Course schema
var courseSchema = new Schema({
	name: String,
	courseNum: String,
	isInCurrentSemester: Boolean,
	dateCreated
	semesterIds: [String],
	studentIds: [String],
	assignmentIDs: [ObjectId],
	comments: [String]
});

//Export the model
var Course = mongoose.model('Course', courseSchema);
module.exports = Course;