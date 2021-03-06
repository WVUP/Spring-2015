angular.module('assignmentCtrl', ['assignmentService', 'ui.bootstrap'])

.controller('assignmentController', function ($location, $routeParams, Assignment, $modal) {
	var vm = this;

	vm.processing = true;

	vm.itemsPerPage = 2;
	vm.currentPage = 1;
	vm.maxSize = 5;

	vm.receivedData = false;

	vm.animationsEnabled = true;

	Assignment.all().success(function (data) {
		vm.notFilteredAsssignments = data;
		vm.totalItems = data.length;

		var begin = ((vm.currentPage - 1) * vm.itemsPerPage),
		end = begin + vm.itemsPerPage;
		vm.assignments = vm.notFilteredAsssignments.slice(begin, end);

		vm.processing = false;
	});

	vm.pageChanged = function () {
		var begin = ((vm.currentPage - 1) * vm.itemsPerPage),
		end = begin + vm.itemsPerPage;
		vm.assignments = vm.notFilteredAsssignments.slice(begin, end);
	};
	
	vm.pageCount = function () {
		return Math.ceil(vm.totalItems / vm.itemsPerPage)
	}


	vm.areYouSure = function (id) {
		var modalInstance = $modal.open({
			animation: vm.animationsEnabled,
			templateUrl: 'areYouSure.html',
			controller: "areYouSureController",
			controllerAs: "assignment",
		});
		modalInstance.result.then(function () {
			vm.doDeleteAssignment(id)
		});
	};

	vm.selectedAssignments = [];

	// -----------------Datepicker----------------------//

	vm.datepickers = {
		dt: false,
		dtSecond: false
	},

	vm.today = function() {
	    vm.dt = new Date();
	    vm.dtSecond = new Date();
  	};

  	vm.today();

  	vm.clear = function () {
  		$vm.dt = null;
	 };

	// Disable weekend selection
	vm.disabled = function(date, mode) {
		return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
	};

	vm.toggleMin = function() {
		vm.minDate = vm.minDate ? null : new Date();
	};

	vm.toggleMin();

	vm.open = function($event, which) {
		$event.preventDefault();
		$event.stopPropagation();

		vm.datepickers[which] = true;
	};

	vm.dateOptions = {
		formatYear: 'yy',
		startingDay: 1
	};

	vm.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
	vm.format = vm.formats[0];

	//---------------------------------------------------------

	vm.toggleCheck = function (assignm) {
		if(vm.selectedAssignments.indexOf(assignm) === -1)
			vm.selectedAssignments.push(assignm);
		else
			vm.selectedAssignments.splice(vm.selectedAssignments.indexOf(assignm), 1);
	};

	vm.postAssignments = function () {
		Assignment.postAssignments($routeParams.class_id, vm.selectedAssignments).success(function (data) {
			if(data.success)
				$location.path('/assignments/view/' + $routeParams.class_id);
			vm.processing = false;
		})
	}

	vm.doDeleteAssignment = function (id) {
		console.log('in delete')
		Assignment.delete(id).success(function (data) {
			vm.processing = false;
			vm.assignments = data.assignments;
		});
	};

	vm.doNewAssignment = function (isValid) {
		vm.error = '';
		vm.processing = true
		if (isValid){
			Assignment.create(vm.assignmentData, $routeParams.class_id).success(function (data) {
				vm.receivedData = true;
				vm.message = data.message;
				vm.processing = false;
			})
			.error(function (err) {
				vm.error = err;
				vm.processing = false;
			})
		}else{
			vm.processing = false;
			vm.error = 'Invalid form';
		};
	};
})

.controller('assignmentEditController', function (Assignment, $routeParams) {
	var vm = this;

	vm.receivedData = false;

	vm.datepickers = {
		dt: false,
		dtSecond: false
	},

	vm.today = function() {
	    vm.dt = new Date();
	    vm.dtSecond = new Date();
  	};

  	vm.today();

  	vm.clear = function () {
  		$vm.dt = null;
	 };

	// Disable weekend selection
	vm.disabled = function(date, mode) {
		return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
	};

	vm.toggleMin = function() {
		vm.minDate = vm.minDate ? null : new Date();
	};

	vm.toggleMin();

	vm.open = function($event, which) {
		$event.preventDefault();
		$event.stopPropagation();

		vm.datepickers[which] = true;
	};

	vm.dateOptions = {
		formatYear: 'yy',
		startingDay: 1
	};

	vm.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
	vm.format = vm.formats[0];

	vm.saveAssignment = function () {
		if(vm.assignmentData != null){
			vm.processing = true;

			Assignment.update($routeParams.assignment_id, vm.assignmentData).success(function (data) {
				vm.receivedData = true;
				vm.message = data.message;
				vm.processing = false;
			});
		};
	};
})

.controller('gradesController', function ($routeParams, User, $rootScope) {
	var vm = this;
	vm.oneAtATime = false;

	vm.statusText = 'Not Submitted';

	$rootScope.deferredRounting.promise.then(function () {
		User.getFullInfo($rootScope.currentUser.id).success(function (data) {
			vm.userData = data;
		});
	})

	vm.showStatus = function () {
		vm.statusText = 'Submit'
	};
})


.controller('assignmentClassController', function ($routeParams, Assignment) {
	var vm = this;

	vm.processing = true;

	Assignment.allForClass($routeParams.class_id).success(function (data) {
		vm.assignments = data.assignments;
		vm.classNm = data.classNm;
		console.log(vm.classNm);
		vm.processing = false;
	});

	vm.doDeleteAssignment = function (id) {
		Assignment.delete(id).success(function (data) {
			vm.processing = false;
			vm.assignments = data.assignments;
		});
	};
})