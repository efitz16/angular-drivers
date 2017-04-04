app.controller('singleDriverController', ['$scope', 'getDrivers', '$routeParams', function($scope, getDrivers, $routeParams) {
	getDrivers.success(function(data) {
	  $scope.detail = data[$routeParams.id];
	});
}]);
