angular.module('app').factory('user', function ($resource) {
	var UserResource = $resource('/api/users/:id', {_id: "@id"});

	UserResource.prototype.isAdmin = function() {
		console.log('returned admin')
		return this.roles && this.roles.indexOf('admin') > -1;
	};
	UserResource.prototype.isInstructor = function() {
		return this.roles && this.roles.indexOf('instructor') > -1;
	};

	return UserResource;
})