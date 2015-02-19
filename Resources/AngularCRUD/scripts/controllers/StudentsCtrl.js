app.controller('StudentsCtrl', [ '$scope', function ($scope) {
	
	var emptyStudent = {
		firstName: '',
		lastName: '',
		email: ''
	};

	$scope.model = {

		empty: angular.copy(emptyStudent),


		// An array to store each student that has been added
		students: [],

		// Determines whether or not that we should display our add student screen
		showAddStudent: false
	};


	/**
	 * Simply toggles whether or not the Add Student UI should be visible
	 */
	$scope.toggleShowStudent = function () {
		$scope.model.showAddStudent = !$scope.model.showAddStudent;	
	};

	/**
	 * Resets our form data to a clean state
	 * @return {[type]} [description]
	 */
	$scope.reset = function () {
		$scope.model.empty = angular.copy(emptyStudent);	
	};

	/**
	 * Adds a student to our student array, also will set a pristine status to our form
	 * Also has a lame argument of our form object...this is done b/c angularjs wants markup a certain way and i dont
	 * @param {formScope} form Scope to our form object
	 */
	$scope.addStudent = function (form) {

		// Pain the....very annoying
		form.$setPristine();

		// Push our new student in the array
		$scope.model.students.push($scope.model.empty);

		// Reset our form...notice resuability
		$scope.reset();

		
	};


	/**
	 * Removes a student for our array
	 * @param  {object} student The student object that needs to be removed
	 */
	$scope.removeStudent = function (student) {
		$scope.model.students.splice($scope.model.students.indexOf(student), 1);	
	};


}]);