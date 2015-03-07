angular.module('app').factory('auth', function ($http, identity, $q, user) {
	return {
		authenticateUser: function(username, password){
			var d = $q.defer();
			$http.post('/login', {username:username, password:password}).then(function (response) {
			if(response.data.success){
					var usr = new user();
					angular.extend(usr, response.data.user);
					identity.currentUser = usr;
					d.resolve(true);
				}else{
					d.resolve(false);
				}
			})
			return d.promise;
		},
		signout: function(){
			var d = $q.defer();
			$http.post('/logout').then(function(){
				identity.currentUser = undefined;
				d.resolve();
			});
			return d.promise;
		},
		authorizeCurrentUserForRoute: function (role) {
			if(identity.isAuthorized(role))
	  				return true;
	  			else
	  				return $q.reject('no permission to access');
		}
	}
})