var students = [];

function addStudent(){
	var student = new Object();
	student.fName = document.getElementById("firstName").value;
	student.lName = document.getElementById("lastName").value;
	student.email = document.getElementById("email").value;
	students.push(student);
	addRow();
}

function addRow() {
 var table = document.getElementById("insertTable");
 table.innerHTML = '';
	for (var i = 0; i < students.length; i++) {
	    var rowCount = table.rows.length;
	    var row = table.insertRow(rowCount);
	 	
	    row.insertCell(0).innerHTML= '<input type="button" value="Update" onClick="Javacsript:updateRow(this)">';
	    row.insertCell(1).innerHTML= students[i].fName
	    row.insertCell(2).innerHTML= students[i].lName
	    row.insertCell(3).innerHTML= students[i].email
	};
	console.log(students);
}

function deleteStudent(){
	for (var i = 0; i < students.length; i++) {
		if (document.getElementById("delete").value == students[i].email){
			students.splice(i, 1);
			    var index = students[i];
			    var table = document.getElementById("insertTable");
			    table.deleteRow(index);
		}
	};
	console.log(students);
}

function updateStudent(student){

}