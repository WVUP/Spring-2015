angular.module('app').value('toastr', toastr);

angular.module('app').factory('notifier', function (toastr) {
	return{
		notify: function (m) {
			toastr.success(m);
			console.log(m);
		}
	}
})