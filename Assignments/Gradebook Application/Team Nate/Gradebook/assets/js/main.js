$('#courseStartDatePicker input').datepicker({

});
$('#courseEndDatePicker input').datepicker({

});
$('#courseEndDatePicker input').datepicker({

});
$('#assignmentOpenDatePicker input').datepicker({

});
$('#assignmentCloseDatePicker input').datepicker({

});


;(function(){

			// Menu settings
			$('#menuToggle, .menu-close').on('click', function(){
				$('#menuToggle').toggleClass('active');
				$('body').toggleClass('body-push-toleft');
				$('#theMenu').toggleClass('menu-open');
			});


})(jQuery)

Morris.Donut({
	element: 'currentBreakdown',
	data: [
		{label: "CS 329", value: 12},
		{label: "CS 330", value: 23},
		{label: "CS 331", value: 11},
		{label: "CS 332", value: 9},
		{label: "CS 333", value: 4}
	],
	colors: [
		'#ff865c',
		'#ffd777',
		'#43b1a9',
		'#68dff0',
		'#797979'
	],
	resize: true
});

var mongoose = require('mongoose');
mongoose.connect('mongodb://natepaxton:Wvup2013@ds053139.mongolab.com:53139/gradebook');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(callback){
	alert("db open");
});