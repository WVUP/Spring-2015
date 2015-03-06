angular.module('app').factory('auth', function ($http, identity, $q) {
	return {
		authenticateUser: function(username, password){
			var d = $q.defer();
			$http.post('/login', {username:username, password:password}).then(function (response) {
			if(response.data.success){
					identity.currentUser = response.data.user;
					d.resolve(true);
				}else{
					d.resolve(false);
				}
			})
			return d.promise;
		}
	}
})