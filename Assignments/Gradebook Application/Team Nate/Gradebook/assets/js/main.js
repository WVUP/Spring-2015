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

var currentSemesterStudentData = [
	{
		value: 12,
		color: '#68dff0',
		highlight: '#fff',
		label: "CS 329"
	},
	{
		value: 23,
		color: '#ffd777',
		highlight: '#fff',
		label: "CS 330"
	},
	{
		value: 11,
		color: '#ff865c',
		highlight: '#fff',
		label: "CS 331"
	},
	{
		value: 9,
		color: '#43b1a9',
		highlight: '#fff',
		label: "CS 332"
	},
	{
		value: 4,
		color: '#797979',
		highlight: '#fff',
		label: "CS 333"
	}
]

var ctx = document.getElementById("currentBreakdown").getContext("2d");
var currentChart = new Chart(ctx).Doughnut(currentSemesterStudentData, { animationEasing : "easeOutBounce", percentageInnerCutout : 65, segmentShowStroke : false });
