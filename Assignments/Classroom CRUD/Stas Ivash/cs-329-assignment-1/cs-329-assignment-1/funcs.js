window.onload = function () {

    //Create
    function AddStudent() {
        var student = JSON.stringify({ // turn an object into a json text and store as a string
            Id: document.getElementById('Id').value,
            Major: document.getElementById('major').value,
            FirstName: document.getElementById('fName').value,
            LastName: document.getElementById('lName').value,
            Phone: document.getElementById('Phone').value,
            Email: document.getElementById('Email').value
        });
        students.push(student);
        sessionStorage.setItem("students", JSON.stringify(students)); //saving
        console.log("Student info added");
    }

    function DeleteStudent(id) {
        students.splice(id, 1);
        sessionStorage.setItem('students', JSON.stringify(students));
    }


    function Generate() {
        studentsNode.textContent = "";
        for (var i in students) {
            var stuNode = document.createElement('ul');
            stuNode.id = i;
            var remove = document.createElement('span');
            remove.setAttribute('dt', 'remove');
            remove.className = "icono-trash";
            var edit = document.createElement('span');
            edit.setAttribute('dt', 'edit');
            edit.className = 'icono-asterisk';

            SetAttributes(remove, i);
            SetAttributes(edit, i);

            var s = JSON.parse(students[i]);
            stuNode.textContent = s.Id + " " + s.Major + " " + s.FirstName + " " + s.LastName + " " + s.Phone + " " + s.Email;

            studentsNode.appendChild(stuNode);
            stuNode.appendChild(edit);
            stuNode.appendChild(remove);

            AssignDeleteListener(remove.getAttribute('dt'), i);
            AssignEditListener(edit.getAttribute('dt'), i);
        }
    }


    function AssignEditListener(text, count) {
        //assigning a listener for the dynamic edit element
        document.getElementById(text + count).addEventListener('click', function handler(e) {
            var currentId = document.getElementById(e.target.id);
            EditStudent(e.target.getAttribute('data')); //passing custom attr val
        }, false);
    }

    function EditStudent(id) {
        //get text element to change
        var allDivsInsideStudentsNode = studentsNode.children;
        var theNodeINeed;
        var s = JSON.parse(students[id]);
        for (var i = 0; i < allDivsInsideStudentsNode.length; i++) {
            if (allDivsInsideStudentsNode[i].id == id) {
                theNodeINeed = allDivsInsideStudentsNode[i]
            }
        }
        var saveButton = document.createElement('span');
        saveButton.type = 'submit';
        saveButton.className = 'icono-sync';
        saveButton.id = 'saveEdit' + id;
        theNodeINeed.innerHTML = "<input value=" + s.Id + " id=mod" + id + ">"
        + "<input value=" + s.Major + " id=maj" + id + ">"
        + "<input value=" + s.FirstName + " id=fn" + id + ">"
        + "<input value=" + s.LastName + " id=ln" + id + ">"
        + "<input value=" + s.Phone + " id=phone" + id + ">"
        + "<input value=" + s.Email + " id=email" + id + ">";

        studentsNode.children[id].appendChild(saveButton);

        saveButton.addEventListener('click', function (e) {
            var currentId = document.getElementById(e.target.id);

            students[id] = JSON.stringify({
                Id: document.getElementById("mod" + id).value,
                Major: document.getElementById("maj" + id).value,
                FirstName: document.getElementById("fn" + id).value,
                LastName: document.getElementById("ln" + id).value,
                Phone: document.getElementById("phone" + id).value,
                Email: document.getElementById("email" + id).value
            })
            sessionStorage.setItem("students", JSON.stringify(students));
            //display modified items
            Generate();

            console.log('Student info saved');
        }, false);
    }


    function SetAttributes(node, count) {
        node.id = node.getAttribute('dt') + count;
        node.style.cursor = 'pointer';
        node.setAttribute('data', count); //custom attr
    }

    function AssignDeleteListener(text, count) {
        //assigning a listener for the dynamic remove element
        document.getElementById(text + count).addEventListener('click', function (e) {
            var currentId = document.getElementById(e.target.id);
            DeleteStudent(e.target.getAttribute('data')); //passing custom attr val
            Generate();
            currentId.parentNode.remove();
            console.log("Student info  removed");
        }, false);
    }

    //may also use localstorage if needed
    //var log;
    //var logs = document.getElementById('log');
    var students = sessionStorage.getItem("students");
    var studentsNode = document.getElementById('students');
    students = JSON.parse(students);
    if (students == null) {
        students = [];
    }
    Generate();
    document.getElementById('save').addEventListener('click', function () {
        AddStudent();
        Generate();
        document.getElementById('form').reset();
    }, false);

}