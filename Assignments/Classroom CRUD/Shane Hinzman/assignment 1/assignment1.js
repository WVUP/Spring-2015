var students = [];

function add(){
	var student = new Object();
	student.fName = document.getElementById("firstName").value;
	student.lName = document.getElementById("lastName").value;
	student.email = document.getElementById("email").value;
	students.push(student);
	console.log(students);
}
