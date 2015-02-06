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


/*
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