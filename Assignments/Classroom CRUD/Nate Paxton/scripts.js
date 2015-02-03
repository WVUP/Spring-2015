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
	this.fullName = function(){
		return (this.firstName + " " + this.lastName);
	}
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
	logTimer("Read view refreshed");
}

//Form openers
var openCreateForm = function(){
	document.querySelector('#readFormRow').style.display = "none";
	document.querySelector('#createFormRow').style.display = "block";
	logTimer("Create Student form opened");
}

var openUpdateForm = function(arrayPos){
	var student = Students[arrayPos];
	document.querySelector('#readFormRow').style.display = "none";
	document.querySelector('#updateFormRow').style.display = "block";
	document.querySelector('#updateForm').setAttribute("onsubmit", "submitUpdate(" + arrayPos + ")");

	//Populate the form with current data
	document.querySelector('#updateImage').setAttribute("src", "images/" + student.image);
	document.querySelector('#updateFName').setAttribute("value", student.firstName);
	document.querySelector('#updateLName').setAttribute("value", student.lastName);
	
	//Loop to get values of 'select'
	var upMajor = document.querySelector('#updateMajor');
	for (var i = 0; i<upMajor.length; i++){
		if (upMajor.options[i].value == student.major){
			upMajor.options[i].setAttribute("selected", "selected");
		}
	}

	var upYear = document.querySelector('#updateYear');
	for (var i = 0; i<upYear.length; i++){
		if (upYear.options[i].value == student.year){
			upYear.options[i].setAttribute("selected", "selected");
		}
	}
	
	document.querySelector('#updateGPOutput').innerText = student.GPA;
	document.querySelector('#updateAdvisor').setAttribute("value", student.advisor);

	var options = document.getElementBy

	logTimer("Update Student form opened for " + student.firstName + " " + student.lastName);
}

var openDeleteForm = function(arrayPos){
	document.querySelector('#readFormRow').style.display = "none";
	document.querySelector('#deleteFormRow').style.display = "block";

	var student = Students[arrayPos];

	//Populate delete form with current values
	document.querySelector('#deleteImage').setAttribute("src", "images/" + student.image);
	document.querySelector('#deleteImage').setAttribute("title", student.fullName);
	document.querySelector('#deleteFName').innerText = student.firstName;
	document.querySelector('#deleteLName').innerText = student.lastName;
	document.querySelector('#deleteYear').innerText = student.year;
	document.querySelector('#deleteMajor').innerText = student.major;
	document.querySelector('#deleteGPA').innerText = student.GPA;
	document.querySelector('#deleteAdvisor').innerText = student.advisor;
	document.querySelector('#deleteButton').setAttribute("onclick", "submitDelete(" + arrayPos + ")");

	logTimer("Delete Student form opened");
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

//Collects form data for student update
var submitUpdate = function(arrayPos){
	var updateForm = document.querySelector('#updateForm');
	document.querySelector('#readDisplay').removeChild(document.querySelector('#student-display-' + arrayPos));

	//See if properties have changed
	if (updateForm.updateFName.value != Students[arrayPos].firstName){
		Students[arrayPos].firstName = updateForm.updateFName.value;
	}
	if (updateForm.updateLName.value != Students[arrayPos].lastName){
		Students[arrayPos].lastName = updateForm.updateLName.value;
	}
	if (updateForm.updateMajor.value != Students[arrayPos].major){
		Students[arrayPos].major = updateForm.updateMajor.value;
	}
	if (updateForm.updateYear.value != Students[arrayPos].year){
		Students[arrayPos].year = updateForm.updateYear.value;
	}
	if (updateForm.updateGPOutput.value != Students[arrayPos].GPA){
		Students[arrayPos].GPA = updateForm.updateGPOutput.value;
	}
	if (updateForm.updateAdvisor.value != Students[arrayPos].advisor){
		Students[arrayPos].advisor = updateForm.updateAdvisor.value;
	}

	Students[arrayPos].posted = false;
	logTimer(Students[arrayPos].firstName + " " + Students[arrayPos].lastName + " updated")
	displayRead();
	updateForm.reset();
	refresh();
	return false;
}

var submitDelete = function(arrayPos){
	document.querySelector('#readDisplay').removeChild(document.querySelector('#student-display-' + arrayPos));
	logTimer(Students[arrayPos].firstName + " " + Students[arrayPos].lastName + " deleted")
	Students.pop(arrayPos);
	displayRead();
	refresh();
	return false;
}

//Creates student elements for Read display
var displayRead = function(){
	for(var i=0; i<Students.length; i++){
		if (Students[i].posted == false){
			var data = "<div id='student-display-" + i + "' class='studentDisplay col-lg-3'><div class='panel panel-primary'><div class='panel-heading'><h3 class='panel-title'>" + Students[i].firstName + " " + Students[i].lastName + "</h3></div><div class='panel-body'><div class='row'><div class='col-lg-4'><img class='img-responsive' src='images/" + Students[i].image + "' title='" + Students[i].fullName + "'></div>" + "<div class='col-lg-8 centered'><p><b>" + Students[i].year + "</b></p><p><b>" + Students[i].major + "</b></p><p><b>" + Students[i].GPA + "</b></p><p><b>" + Students[i].advisor + "</b></p></div></div><hr><div class='col-lg-12 centered'><button id='updateButton' class='btn btn-success' type='button' onclick='openUpdateForm(" + i + ")'>Update</button><button id='deleteButton' class='btn btn-danger' type='button' onclick='openDeleteForm(" + i + ")'>Delete</button></div></div></div></div>";
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
function updateGPUpdate(val){
	document.querySelector('#updateGPOutput').value = val;
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

