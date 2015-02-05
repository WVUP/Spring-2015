
var array = [];
console.log(array);
document.getElementById("demo").innerHTML = fruits;

function student (a, b, c) {
    this.Fname = a;
    this.Lname= b;
    this.Phone = c;
    
         return 'First name: '+this.Fname + ' '+'  Last name: ' + this.Lname+ ' '+'    Email: '+ this.Phone+'|'; 
    
};


function myFunction() {
	
	var fname = document.getElementById("firstname").value;
	var lname = document.getElementById("lastname").value;
	var email = document.getElementById("email").value;
	
   // fruits.push(nam);
    
   // document.getElementById("student1").innerHTML = student(fname, lname, Phone);
    array.push(student(fname, lname, email));
   

}
myFunction();
// display array
function displayArray(){
  
  
    document.getElementById("student1").innerHTML = array+"<br/>";
  

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
  //new value
  var Newfname = document.getElementById("Newfirstname").value;
  var Newlname = document.getElementById("Newlastname").value;
  var Nemail = document.getElementById("Newemail").value;
  
    var st =student(ufname, ulname, uemail); 
     array[array.indexOf(st)] = student(Newfname, Newlname, Nemail);
    displayArray();
    
  };
  // validation
  function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x==null || x=="") {
        alert("Name must be filled out");
        return false;
    }
}


