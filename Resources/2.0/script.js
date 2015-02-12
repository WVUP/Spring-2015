
var functionElement = document.getElementById('functions'),
	debuggingElement = document.getElementById('debugging');
function togglePage (page) {
	
	if(page == 'functions'){
		functionElement.classList.remove('hide');
		debuggingElement.classList.add('hide');
	}else{
		debuggingElement.classList.remove('hide');
		functionElement.classList.add('hide');
	}

}

var colors = [
	{
		color: "red",
		value: "#f00"
	},
	{
		color: "green",
		value: "#0f0"
	},
	{
		color: "blue",
		value: "#00f"
	},
	{
		color: "cyan",
		value: "#0ff"
	},
	{
		color: "magenta",
		value: "#f0f"
	},
	{
		color: "yellow",
		value: "#ff0"
	},
	{
		color: "black",
		value: "#000"
	}
];

function renderSwatches () {
	var html = '';

	for (var i = 0; i < colors.length; i++) {
		html +=
			'<div>' +
				'<label style="width:100px; text-align:right;">' + colors[i].color + '</label>' +
				'<div style="height:25px; display:inline-block; vertical-align:middle; width:25px; margin-left:20px; background-color: ' + colors[i].value + '"></div>' +
			'</div>';
	}

	var elem = document.getElementById('colorsContainer');
	elem.innerHTML = html;
}

function clearSwatches () {
	var elem = document.getElementById('colorsContainer');
	elem.innerHTML = 'cleared content';

	setTimeout(function () {
		elem.innerHTML = '';
	}, 1200);
}

// Initialize a counter to keep track of the number of btn clicks
var counter = 0;

/**
 * Executed everytime a user clicks the giant blue button
 */
function btnExample () {

	var _currentDate = new Date(), // Gets the current datetime that button was clicked
		currentRequest = counter + 1, // since our counter started at 0, we add 1 to accurately report to user their current click
		suffix; // stores the value for 'nd', 'rd', 'th'

	// Based on the current request we know how to suffix our data, sufficient until you get to 101st, 102nd etc.,
	switch(currentRequest)
	{
		case 2:
			suffix = 'nd';
			break;
		case 3:
			suffix = 'rd';
			break;

		default:
			suffix = 'th';
			break;
	}

	// Build out a string to show to our user
	var _text = (counter === 0) ? 'Todays date: ' : 'You need the date a ' + (counter + 1)  + suffix +  ' time.';
	
	// Increment our counter variable to persist the number of clicks
	counter++;

	// Display a generic text box to the user
	alert(_text + _currentDate.toDateString());
}