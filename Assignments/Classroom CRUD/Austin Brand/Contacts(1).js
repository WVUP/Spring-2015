var contacts = [

	{
		firstName: 'Austin',
		lastName: 'Brand',
		email: 'abrand@wvup.edu',
		major: 'Software Engineering',
	},
	{ 

		firstName: 'Steve',
		lastName: 'Rogers',
		email: 'capAmerica@avengers.com',
		major: 'Saving lives',
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