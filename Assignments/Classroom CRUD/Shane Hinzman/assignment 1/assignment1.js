var students = [];

function add(){
	var student = new Object();
	student.fName = document.getElementById("firstName").value;
	student.lName = document.getElementById("lastName").value;
	student.email = document.getElementById("email").value;
	students.push(student);
	console.log(students);
	alert("First name: " + student.fName + "    Last name: " + student.lName +"    Email: " + student.email);
}
function deleteStudent(){
	for (var i = 0; i < students.length; i++) {
		if (document.getElementById("delete").value == students[i].email){
			students.splice(i, 1);
		}
	};
	console.log(students);
}