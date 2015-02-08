// for updates create prepopulated input elements or repopulate originals?

// ??????????? figure out a way to itterate through dom to get any number of input values for attributes ?????????

// Declares input attributes as an object
var sourceObject = ["first", "email", "major", "advisor"];

// Builds object of type student
function buildObject(type) {
	
	type = [];
	
	// Adds atributes to student object
	for(i = 0; i < sourceObject.length; i++) {
		type.push(document.getElementById(sourceObject[i]).value);
	}

	displayObject(type);
}

// displayObject(object, source)
function displayObject(object) {

	for(i = 0; i < object.length; i++) {

		var newElement = document.createElement("div");

		newElement.className = "student";

		newElement.appendChild(document.createTextNode(object[i]));

		document.getElementById("enrollment").appendChild(newElement);
	}

	clearInput();

}

function clearInput(element) {

	for(i = 0; i < sourceObject.length; i++) {

		document.getElementById(sourceObject[i]).value = '';

	}

}


/*
function addStudent() {

	buildStudent( "first" );

	buildStudent( "email" );

	buildStudent( "major" );

	buildStudent( "advisor" );
}




function addStudent(){
	stu = [];

	stu.push(document.getElementById("first").value);
	stu.push(document.getElementById("email").value);
	stu.push(document.getElementById("major").value);
	stu.push(document.getElementById("advisor").value);

	var newElement = document.createElement("div");

	newElement.className = "student";

	newElement.appendChild(document.createTextNode(stu));

	document.getElementById("enrollment").appendChild(newElement);

	document.getElementById("first").value = '';
	document.getElementById("email").value = '';
	document.getElementById("major").value = '';
	document.getElementById("advisor").value = '';
}



var students = [];

function listStudents(){
	var html = '';

	for(var i = 0; i < students.length; i++){
		studentElement +=
		'<div>' + 
	}
}

function addStudent(){
	var newStudent = document.getElementById("studen").value;
	var newElement = document.createElement("div");
	newElement.className = "student";
	newElement.appendChild(document.createTextNode(students));
	document.getElementById("enrollment").appendChild(newElement);
}
*/