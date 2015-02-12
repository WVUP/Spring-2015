
var array = [student("Md", "Kashem", "kashem@yahoo.com", "305-362-6693")];
console.log(array);
//document.getElementById("demo").innerHTML = fruits;

function student (a, b, c, d) {
    this.Fname = a;
    this.Lname= b;
    this.email = c;
    this.Phone = d;
    
         return this.Fname + "    &nbsp;   &nbsp;  &nbsp; &nbsp;&nbsp;   " + this.Lname+ "    &nbsp;   &nbsp;  &nbsp; &nbsp;&nbsp;   "
         + this.email+ "    &nbsp;   &nbsp;  &nbsp; &nbsp;&nbsp;   "+this.Phone ; 
    
};



function Insert() {
  
  var fname = document.getElementById("firstname").value;
  var lname = document.getElementById("lastname").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("ph").value;

    array.push(student(fname, lname, email, phone));
//validateForm();
}
Insert();
// display array
function displayArray(){     
var text = "";
    var i;
    for (i = 0; i < array.length; i++) 
    { 
      text += (i+1)+"    &nbsp;   &nbsp;  &nbsp; &nbsp;&nbsp;   " + " "+array[i]+"    &nbsp;   &nbsp;  &nbsp; &nbsp;&nbsp;   " +
      "&nbsp;&nbsp;&nbsp;<button onclick="+"DeleteStudent("+i+")"+">Delete Student</button><button onclick="+"EditStudent("+i+")>Edit Student</button><br>"+ "<br>";
  }
    



  
  
    document.getElementById("student1").innerHTML = text;
  

};

function deleteFunction(){
    array.pop();
    document.getElementById("student1").innerHTML = array;
};
function display()
{
  

//let's print out the headers to our table
document.write("<table border=\"1\" cellpadding=\"5\">");
document.write("<tr><th>Student Number</th><th>Details</th></tr>");

//Now we start the for loop using the variable flower to hold our key.
for ( var flower in array) //print the values into a table cell for each iteration
  document.write( "<tr><td>" + flower + "</td><td>" + array[flower] + "</td></tr>"); 

//finally close the table
document.write ("</table>");

};
function Update()
  {
  var ufname = document.getElementById("upfirstname").value;
  var ulname = document.getElementById("uplastname").value;
  var uemail = document.getElementById("upemail").value;
  var uphone = document.getElementById("upphone").value;
  //new value
  var Newfname = document.getElementById("Newfirstname").value;
  var Newlname = document.getElementById("Newlastname").value;
  var Nemail = document.getElementById("Newemail").value;
  var Nphone = document.getElementById("Newphone").value;
  
    var st =student(ufname, ulname, uemail, uphone); 
     array[array.indexOf(st)] = student(Newfname, Newlname, Nemail, Nphone);
    displayArray();
    
  };
  // validation
  function validateForm() {

    Insert();
   /* var x = document.forms["form1"]["firstname"].value;

    var y = document.forms["form1"]["lastname"].value;
    var phone = document.forms["form1"]["ph"].value;
    if (x==null || x=="") {
        alert(" First Name must be filled out");
      // return false;
    }  

    if(y==null || y==""){
      alert("Last Name must be filled out");
         // return false;
    }

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form1.email.value))  
  {  
    
    //return true;
    
    
  }  else {
     alert("You have entered an invalid email address!")  
    // return (false)}

*/


};

//phone number validation





//start select student
function EditStudent(x) {
  var text = "";
  var i;
  for (i = 0; i < array.length; i++) 
  { 
   if (i == x){
    text += "<input type="+"text"+" id="+"updatefname"+" value="+students[x].firstname+"><input type="+"text"+" id="+"updatelname"+" value="+students[x].lastname+"><input type="+"text"+" id="+"updateage"+" value="+students[x].age+"><input type="+"text"+" id="+"updategender"+" value="+students[x].gender+"><input type="+"text"+" id="+"updatemajor"+" value="+students[x].major+"><input type="+"text"+" id="+"updategpa"+" value="+students[x].gpa+"><input type="+"text"+" id="+"updateadvisor"+" value="+students[x].advisor+"><button onclick="+"DeleteStudent("+x+")>Delete Student</button><button onclick="+"Update("+x+")>Update</button><br>";
   }

   else{
    text += " "+students[i].firstname+"    &nbsp;   &nbsp;  &nbsp; &nbsp;&nbsp;   "+students[i].lastname+"     &nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;  "+students[i].age+"           &nbsp;      &nbsp; &nbsp;&nbsp; "+students[i].gender+"  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        &nbsp;  "+students[i].major+" &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;   "+students[i].gpa+"&nbsp;&nbsp;&nbsp;&nbsp; "+students[i].advisor+"&nbsp;&nbsp;&nbsp;<button onclick="+"DeleteStudent("+i+")"+">Delete Student</button><button onclick="+"EditStudent("+i+")>Edit Student</button><br>";

   }
  }
    document.getElementById("demo").innerHTML = text;
}

function Update(x) {
  var updateStudent = new Object();
  updateStudent.firstname =  document.getElementById("updatefname").value;
  updateStudent.lastname =  document.getElementById("updatelname").value;
  updateStudent.age =  document.getElementById("updateage").value;
  updateStudent.gender =  document.getElementById("updategender").value;
  updateStudent.major =  document.getElementById("updatemajor").value;
  updateStudent.gpa =  document.getElementById("updategpa").value;
  updateStudent.advisor =  document.getElementById("updateadvisor").value;

  students[x] = updateStudent;
  var text = "";
    var i;
    for (i = 0; i < students.length; i++) 
    { 
      text += " "+students[i].firstname+"    &nbsp;   &nbsp;  &nbsp; &nbsp;&nbsp;   "+students[i].lastname+"     &nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;  "+students[i].age+"           &nbsp;      &nbsp; &nbsp;&nbsp; "+students[i].gender+"  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        &nbsp;  "+students[i].major+" &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;   "+students[i].gpa+"&nbsp;&nbsp;&nbsp;&nbsp; "+students[i].advisor+"&nbsp;&nbsp;&nbsp;<button onclick="+"DeleteStudent("+i+")"+">Delete Student</button><button onclick="+"EditStudent("+i+")>Edit Student</button><br>";
  }
    document.getElementById("demo").innerHTML = text;


}


//end select student


