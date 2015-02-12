
var listOfStudents =[];

function createStudent(){
	var newStudent = new Object(); 
	newStudent.FName = document.getElementById("firstName").value;
	newStudent.LName = document.getElementById("lastName").value;
	newStudent.Age = document.getElementById("age").value;
	newStudent.Email = document.getElementById("email").value;
	newStudent.Major = document.getElementById("major").value;
	listOfStudents.push(newStudent);
	
	var roster = "";
    var i;
    for (i = 0; i < listOfStudents.length; i++) 
    { 
        roster += " "+listOfStudents[i].FName+"    "+listOfStudents[i].LName+"    "+listOfStudents[i].Age+"    "+listOfStudents[i].Email+"    "+listOfStudents[i].Major+
        "<button onclick="+"update("+i+")"+">Update Student</button><button onclick="+"deleteStudent("+i+")>Delete Student</button><br>";
	}
	 document.getElementById("rosterArea").innerHTML = roster;
	 console.log(createStudent)

}


function deleteStudent(placeholder){
	listOfStudents.splice(placeholder, 1);
	var roster = "";
	var i;
	for (i = 0; i < listOfStudents.length; i++)
	{
		roster += " "+listOfStudents[i].FName+"    "+listOfStudents[i].LName+"    "+listOfStudents[i].Age+"    "+listOfStudents[i].Email+"    "+listOfStudents[i].Major+
        "<button onclick="+"update("+i+")"+">Update Student</button><button onclick="+"deleteStudent("+i+")>Delete Student</button><br>";
	}
	 document.getElementById("rosterArea").innerHTML = roster;
	 console.log(deleteStudent);

}

