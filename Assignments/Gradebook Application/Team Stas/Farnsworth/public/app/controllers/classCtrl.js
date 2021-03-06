angular.module('classCtrl', ['classService'])

.controller('classController', function ($location, Class) {
	var vm = this;
	vm.processing = true;

  vm.isInstructor = isInstructor;
    console.log(isInstructor + "from class ctrl");

	Class.all().success(function (data) {
		vm.classes = data;
		vm.processing = false;
	});

	vm.doDeleteClass = function (id) {
		Class.delete(id).success(function (data) {
			vm.processing = false;
			vm.classes = data.classes;
		});
	};

	vm.doNewClass = function (isValid) {
		vm.error = '';
		if (isValid){
			vm.classData.instructor = currentUserId;
			console.log(vm.classData.instructor)
			Class.create(vm.classData).success(function (data) {
				if(data.success)
					$location.path('/cpanel');
				else{
					vm.processing = false;
					vm.error = data.message;
				};
			});
		}else{
			vm.processing = false;
			vm.error = 'Fields marked with a * are mandatory.';
		};
	};
})

.controller('addStudentsController', function ($routeParams, $location, User, Class) {
	var vm = this;
	vm.isInstructor = isInstructor;

	vm.processing = true;
	vm.selectedUsers = [];

	//geting all users who are not instructors
	User.all().success(function (data) {
		vm.processing = false;
		vm.users = data;
	});

	vm.toggleCheck = function(usr) {
		if (vm.selectedUsers.indexOf(usr) === -1)
			vm.selectedUsers.push(usr)
		else
			vm.selectedUsers.splice(vm.selectedUsers.indexOf(usr), 1);
	};

	vm.postStudents = function () {
		Class.postStudents($routeParams.class_id, vm.selectedUsers).success(function (data) {
			if (data.success)			
				$location.path('/classes/enrolledStudents/' + $routeParams.class_id);
				
			vm.processing = false;
		});
	};
})

.controller('enrolledStudentsController', function ($location, $routeParams, Class, $modalInstance, classId) {
	var vm = this;
	vm.isInstructor = isInstructor;
	vm.processing = false;

	Class.getStudents(classId).success(function (data) {
		vm.users = data.students;
		vm.className = data.className;
		vm.processing = false;
	});

	vm.close = function () {
		$modalInstance.dismiss('cancel');
	};

	vm.unenroll = function (userId) {
		vm.processing = true;
		var usrId = {
			userId : userId
		};
		Class.unenroll(classId, usrId).success(function (data) {
			vm.users = data
			vm.processing = false;
		});
	};

})