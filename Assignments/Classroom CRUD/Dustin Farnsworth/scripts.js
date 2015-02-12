var enrolled = [];

var idArray = ["first", "last", "email", "major", "advisor"];

function buildObject() {
	var studentObject = {
		fname: document.getElementById("first").value,
		lname: document.getElementById("last").value,
		email: document.getElementById("email").value,
		major: document.getElementById("major").value,
		advisor: document.getElementById("advisor").value
	};

	enrolled.push(studentObject);
	console.log("student:", studentObject);
	console.log("enrolled in builder function", enrolled);
	displayObject(enrolled);
}

function displayObject() {
	var newElement = '';

	for(var i = 0; i < enrolled.length; i++) {
		newElement +=
			'<div class=\'student\' id = \'enrolled[i].fname\'>' +
				'<button style=\'button;\' id = "update" onclick = "updateObject()">' + "Update" + '</button>' +
				'<button style=\'button; margin-right: 9px;\' id = "delete" onclick = "deleteObject()">' + "Delete" + '</button>' +
				enrolled[i].fname + ' ' + enrolled[i].lname + ', ' + enrolled[i].email + ', ' + enrolled[i].major + ', ' + enrolled[i].advisor +
			'</div>';
	}

	var source = document.getElementById('enrollment');
	source.innerHTML = newElement;
	clearInput();
}

function clearInput() {
	for(i = 0; i < idArray.length; i++) {
		document.getElementById(idArray[i]).value = '';
	}
}

function updateObject() {
	document.getElementById(idArray[0]).value = 'Dustin';
	document.getElementById(idArray[1]).value = 'Farnsworth';
	document.getElementById(idArray[2]).value = 'dfarnswo@wvup.edu';
	document.getElementById(idArray[3]).value = 'CS';
	document.getElementById(idArray[4]).value = 'Almond';
}

function deleteObject(elementValue) {
	enrolled = enrolled.filter(function(el) {
		return el.fname !== "Dustin";
	});

	displayObject();
}


/*
	enrolled = enrolled.filter(function (element) {
			return element.fname !== "elementValue";
		}
	);
*/


