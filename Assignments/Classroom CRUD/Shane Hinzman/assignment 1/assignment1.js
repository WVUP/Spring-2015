var students = [];

function addRow() {
	var student = new Object();
	student.fName = document.getElementById("firstName").value;
	student.lName = document.getElementById("lastName").value;
	student.email = document.getElementById("email").value;
	students.push(student);
	for (var i = 0; i < students.length; i++) {
	    var table = document.getElementById("myTableData");
	 
	    var rowCount = table.rows.length;
	    var row = table.insertRow(rowCount);
	 
	    row.insertCell(0).innerHTML= '';
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
			    var index = students[(i + 1)];
			    var table = document.getElementById("myTableData");
			    table.deleteRow(index);
		}
	};
	console.log(students);
}