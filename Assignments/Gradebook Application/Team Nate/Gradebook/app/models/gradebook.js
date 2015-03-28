var mongoose = require('mongoose');

module.exports = [mongoose.model('student', {
	firstName : String,
	lastName : String,
	courses : [String],
	phoneNum : String,
	email : String,
	comments : [String]
});

mongoose.model('course', {
	name : String,
	semester : String,
	courseNum : String,
	creditHrs : Number,
	startDate : Date,
	endDate : Date,
	time : Number,
	roomNum : String,
	comments : [String]
});

mongoose.model('assignment', {
	name : String,
	courseNum : String,
	openDate : Date,
	closeDate : Date,
	description : String,
	type : String,
	comments : [String]
});

]