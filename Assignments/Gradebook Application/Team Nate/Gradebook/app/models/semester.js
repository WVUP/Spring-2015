//Class variables
var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
var Schema = mongoose.Schema;

//Semester schema
var semesterSchema = new Schema({ 
	year: Number,
	term: String,
	startDate: Date,
	endDate: Date,
	courseIDs: [String],
	studentIDs: [String],
	comments: [String]
});

//Export the model
var Semester = mongoose.model('Semester', semesterSchema);
module.exports = Semester;