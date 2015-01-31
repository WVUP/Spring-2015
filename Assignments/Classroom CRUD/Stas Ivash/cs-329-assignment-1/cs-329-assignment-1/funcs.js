window.onload = function () {

    //Create
    function AddStudent() {
        var student = JSON.stringify({ // turn an object into a json text and store as a string
            Id: document.getElementById('Id').value,
            Name: document.getElementById('Name').value,
            Phone: document.getElementById('Phone').value,
            Email: document.getElementById('Email').value
        });
        students.push(student);
        sessionStorage.setItem("students", JSON.stringify(students)); //saving
        console.log('Student added');
    }

    function DeleteStudent(id) {
        students.splice(id, 1);
        sessionStorage.setItem('students', JSON.stringify(students))
        console.log("in delete");
    }

    function Generate() {
        studentsNode.textContent = "";
        for (var i in students) {
            var stuNode = document.createElement('ul');
            stuNode.id = i;
            var remove = document.createElement('p');
            remove.textContent = 'Remove';
            var edit = document.createElement('p');
            edit.textContent = 'Edit';

            SetAttributes(remove, i);
            SetAttributes(edit, i);

            var s = JSON.parse(students[i]);
            stuNode.textContent = s.Id + " " + s.Name + " " + s.Phone + " " + s.Email;

            studentsNode.appendChild(stuNode);
            stuNode.appendChild(remove);
            stuNode.appendChild(edit);

            AssignDeleteListener(remove.textContent, i);
            AssignEditListener(edit.textContent, i);
        }
        console.log('in display')
        console.log(students.length)
    }


    function AssignEditListener(text, count) {
        //assigning a listener for the dynamic edit element
        document.getElementById(text + count).addEventListener('click', function handler(e) {
            var currentId = document.getElementById(e.target.id);
            console.log(currentId);
            console.log(e.target.id);
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
        var saveButton = document.createElement('input');
        saveButton.onchange
        saveButton.type = 'submit';
        saveButton.value = 'Save';
        saveButton.id = 'saveEdit' + id;
        theNodeINeed.innerHTML = "<input value=" + s.Id + " id=mod" + id + ">"
        + "<input value=" + s.Name + " id=name" + id + ">"
        + "<input value=" + s.Phone + " id=phone" + id + ">"
        + "<input value=" + s.Email + " id=email" + id + ">";

        studentsNode.children[id].appendChild(saveButton);

        saveButton.addEventListener('click', function (e) {
            var currentId = document.getElementById(e.target.id);

            students[id] = JSON.stringify({
                Id: document.getElementById("mod" + id).value,
                Name: document.getElementById("name" + id).value,
                Phone: document.getElementById("phone" + id).value,
                Email: document.getElementById("email" + id).value,
            })
            sessionStorage.setItem("students", JSON.stringify(students));
            //display modified items
            Generate();
        }, false);
    }


    function SetAttributes(node, count) {
        node.id = node.textContent + count;
        node.style.cursor = 'pointer';
        node.setAttribute('data', count); //custom attr
    }

    function AssignDeleteListener(text, count) {
        //assigning a listener for the dynamic remove element
        document.getElementById(text + count).addEventListener('click', function (e) {
            var currentId = document.getElementById(e.target.id);
            console.log(currentId);
            console.log(e.target.id);
            DeleteStudent(e.target.getAttribute('data')); //passing custom attr val
            Generate();
            currentId.parentNode.remove();
        }, false);
    }


    //may also use localstorage if needed
    var editSave = false;
    var students = sessionStorage.getItem("students");
    var studentsNode = document.getElementById('students');
    students = JSON.parse(students);
    if (students == null) {
        students = [];
    }
    Generate();
    document.getElementById('save').addEventListener('click', function () {
        AddStudent();
        console.log(students);
    }, false);

}