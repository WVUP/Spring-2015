//Class variables
var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

//Semester schema
module.exports = mongoose.model('Semester', {
	year: Number,
	term: String,
	startDate: Date,
	endDate: Date,
	courseIDs: [ObjectId],
	studentIDs: [ObjectId],
	comments: [String]
})