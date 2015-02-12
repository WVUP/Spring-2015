var contacts = [

	{
		firstName: 'Austin',
		lastName: 'Brand',
		email: 'abrand@wvup.edu',
		major: 'Software Engineering',
		GPA: '3.5',
		classYear: 'Sophomore',
	},
	{ 

		firstName: 'Steve',
		lastName: 'Rogers',
		email: 'capAmerica@avengers.com',
		major: 'Saving lives',
		GPA: '4.0',
		classYear: 'Graduated',
	}
];


function init () {
	var _body = document.getElementById('InjectHere');
	var html = '';

	for (var i = 0; i < contacts.length; i++) {
		html += '<tr>';

		html += '<td>' + contacts[i].firstName + '</td>';
		html += '<td>' + contacts[i].lastName + '</td>';
		html += '<td>' + contacts[i].email + '</td>';
		html += '<td>' + contacts[i].major + '</td>';
		html += '<td>' + contacts[i].GPA + '</td>';
		html += '<td>' + contacts[i].classYear + '</td>';

		html += '</tr>';
	}

	_body.innerHTML = html;
}


function add () {
	var _input = document.getElementById('myInput');
	console.log('get input', _input);


	var _value = _input.value;
	console.log('actual value', _value);

	var SplitValue = _value.split(',');
	console.log('Our split', SplitValue);

	// Validate age
	if(isNaN(SplitValue[3])){
		alert(SplitValue[0] + ' ' + SplitValue[1] + 'not valid age');
		return;
	}
		

	var newContact = {
		firstName: SplitValue[0],
		lastName: SplitValue[1],
		email: SplitValue[2],
		age: SplitValue[3]
	};

	console.log('Our new contact', newContact);

	contacts.push(newContact);
	console.log('updated contacts');

	init();
	console.log('re ran init');
}

function myFunction()
{
	document.getElementById("form1").reset();
}

function myFunctionS()
{
	document.getElementById("form1").submit();
}



var firstName=new Array();
var lastName=new Array();
var email=new Array();
var major=new Array();
var GPA=new Array();
var classYear=new Array();

function insert(){
    var firstNameValue = document.getElementById('firstName').value;
    var lastNameValue = document.getElementById('lastName').value;
    var majorValue = document.getElementById('email').value;
    var GPAValue = document.getElementById('GPA').value;
    var classYearValue = document.getElementById('classYear').value;

    firstName[firstName.length]=firstNameValue;
    lastName[lastName.length]=lastNameValue;
    major[major.length]=majorValue;
    GPA[GPA.length]=GPAValue;
    classYear[classYear.length]=classYear;
  }

function show() 
{
  var content="<b> Students: </b><br>";
  for(var i = 0; i < firstName.length; i++) {
     content +=firstName[i]+"<br>";
  }
  for(var i = 0; i < lastName.length; i++) {
     content +=lastName[i]+"<br>";
  }
  for(var i = 0; i < major.length; i++) {
     content +=major[i]+"<br>";
  }
  document.getElementById('display').innerHTML = content;
}
