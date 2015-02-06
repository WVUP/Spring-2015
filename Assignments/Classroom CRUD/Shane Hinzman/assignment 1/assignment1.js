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
	var dStudent = document.getElementById("delete").value;
	for (var i = 0; i < students.length; i++) {
		if (dstudent == students[i].email){
			students.remove(i);
		}
	}
}