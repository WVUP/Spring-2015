// window.onload = function(){
// }

// 	if(typeof(Storage) !== "undefined") {
//     // Code for localStorage/sessionStorage.
// 	} else {
// 	    // Sorry! No Web Storage support..
// 	}

function createStudent(){

    var newStudent = new Object();

    newStudent.fName = document.getElementById('fName').value;
    newStudent.lName = document.getElementById('lName').value;
    newStudent.email = document.getElementById('email').value;
    newStudent.idnum = document.getElementById('idnum').value;

    if(sessionStorage.student)
    {
     student= JSON.parse(sessionStorage.getItem('student'));
    }else{
     student=[];
    }

 	student.push(newStudent )   
    console.log(student);
    sessionStorage.setItem('student', JSON.stringify(student));

    // get on page load for render
    var retrievedObject = sessionStorage.getItem('student');
    console.log('retrievedObject: ', JSON.parse(retrievedObject));


    cancel();
    renderStudents();
    clearFields();

    //    for (var i = 0; i < sessionStorage.length; i++) {
	//  	var key = sessionStorage.key(i);
	//  	var value = sessionStorage.getItem(key);
	//  	console.log(key, value);
	// }

}

function modifyStudent(){
	// addStudent();

	// var currentId = 

	// for(var i = 0; i < student.length; i++)
	// {
	// 	if()
	// }

	// var idInput = document.getElementById('idnum');
	// idInput.readOnly = true;

	// var modifyWindow = document.getElementById('modifyWindow');
	// var modifyStyle = document.getElementById('modifyStyle');
	// var studentsRow = document.getElementById('studentsRow');

	// modifyWindow.style.display = 'initial';

	// modifyStyle.classList.remove('fadeOutUp');
	// modifyStyle.className += ' fadeInDown';

	// // studentsRow.classList.remove('fadeInUp') incase the POS below works
	// studentsRow.className += ' fadeOutDown';
	// setTimeout(function () {
 //      studentsRow.style.display = ('none');
 //    }, 600);

 //    var modfName = document.getElementById('modfName');
 //    var modfName = document.getElementById('modlName');
 //    var modfName = document.getElementById('modemail');
 //    var modidnum = document.getElementById('modidnum').value;

 //    for(var i = 0; i < student.length; i++)
	// {
	// 	var retrievedObjectProp = sessionStorage.getItem('idnum'.value);
	// 	if (modidnum == retrievedObjectProp){
	// 		modfname.value = fName;
	// 		modlName.value = lName;
	// 		modemail.value = email;
	// 		modidnum.value = idnum;
	// 	};
	// }
	
}

function deleteStudent(){

}

function renderStudents(){

	var renderStudent = document.getElementById('render');

	var html = '';

	for(var i = 0; i < student.length; i++)
	{
		html += '<div class="col-lg-4 col-sm-4 text-center"><img class="img-circle img-responsive img-center" src="http://placehold.it/200x200" alt="">'+
		'<h4>'+student[i].fName+'</h4><h4>'+student[i].lName+'</h4><h4>'+student[i].email+'</h4>'+'<h4>'+student[i].idnum+'</h4>'+
		'<a onclick="modifyStudent()" class="btn btn-success" role="button">Modify</a>'+'<a onclick="deleteStudent()" class="btn btn-danger" role="button">Delete</a>'+
        '</div>'
	}

	renderStudent.innerHTML = html;
}

function clearFields(){
	var fName = document.getElementById('fName');
    var Name = document.getElementById('lName');
    var email = document.getElementById('email');
    var idnum = document.getElementById('idnum');

    fName.value = '';
    lName.value = '';
    email.value = '';
    idnum.value = '';
}


function addStudent(){

	// animations / opens form

	var infoWindow = document.getElementById('infoWindow');
	var infoStyle = document.getElementById('infoStyle');
	var studentsRow = document.getElementById('studentsRow');

	infoWindow.style.display = 'initial';

	infoStyle.classList.remove('fadeOutUp');
	infoStyle.className += ' fadeInDown';

	// studentsRow.classList.remove('fadeInUp') incase the POS below works
	studentsRow.className += ' fadeOutDown';
	setTimeout(function () {
      studentsRow.style.display = ('none');
    }, 600);

}

function cancel(){

	// closes form and removes some animation classes

	var infoWindow = document.getElementById('infoWindow');
	var infoStyle = document.getElementById('infoStyle');
	var studentsRow = document.getElementById('studentsRow');


	infoStyle.classList.remove('fadeInDown');
	infoStyle.className += ' fadeOutUp';

	setTimeout(function () {
      infoWindow.style.display = ('none');
    }, 900);
	infoWindow.classList.remove('fadeOutUp');

	
	studentsRow.classList.remove('fadeOutDown');
	studentsRow.style.display = 'initial';
	studentsRow.className += " fadeInUp";   //why wont this POS work

	// ...maybe im just a POS donno
}