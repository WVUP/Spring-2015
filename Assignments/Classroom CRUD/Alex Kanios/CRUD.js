var studentList = [];


function addStudent(){
	var students = new Object();
    var text = "";
    var i;

	students.firstName = document.getElementById("firstName").value;
	students.lastName = document.getElementById("lastName").value;
	students.email = document.getElementById("email").value;
	studentList.push(students);

	for (i = 0; i < students.length; i++)
	{
		text += " "+ students[i].firstname + " " + students[i].lastname + " " + students[i].email +" <button onclick="+"DeleteStudent("+i+")"+">Delete</button><button onclick="+"ReadStudent("+i+")>Edit</button><br>";
	}

	document.getElementById("goHere").innerHTML = text;

}