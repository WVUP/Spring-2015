//Class variables
var Semester = require('./semester');
var Student = require('./student');
var Assignment = require('./assignment');
var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
var Schema = mongoose.Schema;

//Course schema
var courseSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	courseNum: {
		type: String,
		required: true
	},
	dateCreated: {
		type: Date,
		required: true
	},
	dateModified: {
		type: Date,
		required: true
	},
	semesters: [{
		type: ObjectId,
		ref: 'Semester'
	}],
	students: [{
		type: ObjectId,
		ref: 'Student'
	}],
	assignments: [{
		type: ObjectId,
		ref: 'Assignment'
	}],
	comments: [{
		type: String
	}]
});

//Middleware
courseSchema.pre('remove', function (next) {
	var delCourse = this;

	//Remove assignments that were part of course
	Assignment.remove({_id: {$in: delCourse.assignments}}).exec();
	next();
})

//Export the model
var Course = mongoose.model('Course', courseSchema);
module.exports = Course;