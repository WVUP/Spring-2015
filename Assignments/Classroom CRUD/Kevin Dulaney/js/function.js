var students = [];

function createStudent() {
    var student = new Object();
    var text = "";
    var i;
	
    student.firstname =  document.getElementById("firstName").value;
    student.lastname =  document.getElementById("lastName").value;
    student.email =  document.getElementById("email").value;
    students.push(student)

    for (i = 0; i < students.length; i++) 
    { 
      text += " "+students[i].firstname+" "+students[i].lastname+" "+students[i].email+" <button onclick="+"DeleteStudent("+i+")"+">Delete</button><button onclick="+"ReadStudent("+i+")>Edit</button><br>";
  }
    document.getElementById("display").innerHTML = text;

}

function ReadStudent(x) {
  var text = "";
  var i;
  for (i = 0; i < students.length; i++) 
  { 
   if (i == x){
    text = "<input type="+"text"+" id="+"updatefname"+" value="+students[x].firstname+"><input type="+"text"+" id="+"updatelname"+" value="+students[x].lastname+"><input type="+"text"+" id="+"updateemail"+" value="+students[x].email+"><button onclick="+"DeleteStudent("+x+")>Delete</button><button onclick="+"Update("+x+")>Update</button><br>";
   }

   else{
    text += " "+students[i].firstname+" "+students[i].lastname+" "+students[i].email+" <button onclick="+"DeleteStudent("+i+")"+">Delete</button><button onclick="+"ReadStudent("+i+")>Edit</button><br>";

   }
  }
    document.getElementById("display").innerHTML = text;
}

function Update(x) {
  var updateStudent = new Object();
  updateStudent.firstname =  document.getElementById("updatefname").value;
  updateStudent.lastname =  document.getElementById("updatelname").value;
  updateStudent.email =  document.getElementById("updateemail").value;

  students[x] = updateStudent;
  var text = "";
    var i;
    for (i = 0; i < students.length; i++) 
    { 
      text += " "+students[i].firstname+" "+students[i].lastname+" "+students[i].email+"<button onclick="+"DeleteStudent("+i+")"+">Delete</button><button onclick="+"ReadStudent("+i+")>Edit</button><br>";
  }
    document.getElementById("display").innerHTML = text;

}

function DeleteStudent(x) {
  students.splice(x, 1 );
  var text = "";
    var i;
    for (i = 0; i < students.length; i++) 
    { 
      text += " "+students[i].firstname+" "+students[i].lastname+" "+students[i].email+" <button onclick="+"DeleteStudent("+i+")"+">Delete</button><button onclick="+"ReadStudent("+i+")>Edit</button><br>";
  }
    document.getElementById("display").innerHTML = text;
}