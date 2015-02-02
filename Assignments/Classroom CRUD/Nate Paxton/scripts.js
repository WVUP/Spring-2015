//Functions that are to be executed when DOM is loaded
document.addEventListener("DOMContentLoaded", function() { 

  document.querySelector('#begin').style.display = "block";
  document.querySelector('#main').style.display = "none";

  logTimer("Document ready");
});

//Objects and initial data
var Students = new Array();

//Initial array of Students
Students.push(new Student(
	"Nate",
	"Paxton",
	"Software Engineering",
	"Senior",
	"9.9",
	"Charles Almond"
))

Students.push(new Student(
	"Raylan",
	"Givens",
	"Criminal Justice",
	"Junior",
	"5.4",
	"Rhett Wharton"
))

Students.push(new Student(
	"Mitchell",
	"Adams",
	"Software Engineering",
	"Senior",
	"9.9",
	"Charles Almond"
))

//An array of placeholder user images
var userImages = ["user1.jpg", "user2.jpg", "user3.jpg", "user4.jpg"]

function Student(firstName, lastName, major, year, GPA, advisor){
	var userImages = ["user1.jpg", "user2.jpg", "user3.jpg", "user4.jpg"]
	this.firstName = firstName,
	this.lastName = lastName,
	this.major = major,
	this.year = year,
	this.GPA = GPA,
	this.advisor = advisor,
	this.image = userImages[Math.floor(Math.random()*userImages.length)];
	this.posted = false;
}

//Standalone functions
var began = function(){
	document.querySelector('#begin').style.display = "none";
	document.querySelector('#main').style.display = "block";

    //Populate the current students table
    displayRead();

	logTimer("Begin screen closed, main displayed");
}

//Expands the element passed in
var expand = function(element){

	document.querySelector('#newButton').style.display = "none";
	document.querySelector('#createButton').style.display = "block";
}

//Collects form data, updates students, updates table
var submitCreate = function(){
	var form = document.querySelector('#createForm');
	Students.push(new Student(
			form.firstName.value,
			form.lastName.value,
			form.major.value,
			form.year.value,
			form.GPA.value,
			form.advisor.value
		));
	updateCurrentTable();
	form.reset();
	logTimer("Create Form Reset");
	return false;
}

//Updates the Students table
var updateCurrentTable = function(){
for(var i=0; i<Students.length; i++){
	if (Students[i].posted == false){
		var row = "<tr><td>" +
		Students[i].firstName + " " + Students[i].lastName +
		"</td><td>" + Students[i].year +
		"</td><td>" + Students[i].major +
		"</td></tr>";
		document.querySelector('#currentStudents').innerHTML += row;
		logTimer(Students[i].firstName + " " + Students[i].lastName +
			" added to current students table");
		Students[i].posted = true;
	}	
}}

//Creates student elements for Read display
var displayRead = function(){
	for(var i=0; i<Students.length; i++){
		if (Students[i].posted == false){
			var data = "<div class='studentDisplay col-lg-4'><div class='panel panel-primary'><div class='panel-heading'><h3 class='panel-title'>" + Students[i].firstName + " " +  Students[i].lastName + "</div><div class='panel-body'><img class='img-responsive' src='images/" + Students[i].image + "' title='" + Students[i].firstName + " " +  Students[i].lastName + "'>" + "<div class='col-lg-6 centered'><b>" + Students[i].year + "</b></div><div class='col-lg-6 centered'><b>" + Students[i].major + "</b></div><hr><button id='updateButton' class='btn btn-success' type='button' onclick='openUpdateForm()'>Update</button><button id='updateButton' class='btn btn-danger' type='button' onclick='openDeleteForm()'>Delete</button></div></div></div>"
			document.querySelector('#readDisplay').innerHTML += data;
			logTimer(Students[i].firstName + " " + Students[i].lastName +
			" added to current students table");
			Students[i].posted = true;
		}
	}
}

//Logs messages and times to console
var logTimer = function(message){
	var today = new Date();
	today.setHours(today.getHours() - 5);
	console.log(message + ": " + today.toISOString());
}

//Update GPA display
function gpUpdate(val){
	document.querySelector('#gpOutput').value = val;
}

//Fades
function fade(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
}

function unfade(element) {
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 10);
}

