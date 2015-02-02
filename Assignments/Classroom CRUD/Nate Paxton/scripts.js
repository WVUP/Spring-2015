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
	"Nellie",
	"Bertram",
	"Management",
	"Senior",
	"0.9",
	"Jo Bennett"
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
	document.querySelector('#readFormRow').style.display = "block";

    //Populate the current students table
    displayRead();

	logTimer("Begin screen closed, main displayed");
}

//Closes forms, 'refreshes' read view
var refresh = function(){
	document.querySelector('#createFormRow').style.display = "none";
	document.querySelector('#updateFormRow').style.display = "none";
	document.querySelector('#deleteFormRow').style.display = "none";
	document.querySelector('#readFormRow').style.display = "block";
}

//Form openers
var openCreateForm = function(){
	document.querySelector('#readFormRow').style.display = "none";
	document.querySelector('#createFormRow').style.display = "block";
	logTimer("Create Student form opened");
}

var openUpdateForm = function(arrayPos){
	var student = Students[arrayPos];
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
	displayRead();
	form.reset();
	refresh();
	logTimer("Create Form Exited");
	return false;
}

//Creates student elements for Read display
var displayRead = function(){
	for(var i=0; i<Students.length; i++){
		if (Students[i].posted == false){
			var data = "<div class='studentDisplay col-lg-3'><div class='panel panel-primary'><div class='panel-heading'><h3 class='panel-title'>" + Students[i].firstName + " " +  Students[i].lastName + "</h3></div><div class='panel-body'><div class='row'><div class='col-lg-4'><img class='img-responsive' src='images/" + Students[i].image + "' title='" + Students[i].firstName + " " +  Students[i].lastName + "'></div>" + "<div class='col-lg-8 centered'><p><b>" + Students[i].year + "</b></p><p><b>" + Students[i].major + "</b></p><p><b>" + Students[i].GPA + "</b></p><p><b>" + Students[i].advisor + "</b></p></div></div><hr><div class='col-lg-12 centered'><button id='updateButton' class='btn btn-success' type='button' onclick='openUpdateForm(" + i + ")'>Update</button><button id='deleteButton' class='btn btn-danger' type='button' onclick='openDeleteForm(" + i + ")'>Delete</button></div></div></div></div>";
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

