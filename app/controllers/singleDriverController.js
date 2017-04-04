app.controller('singleDriverController', ['$scope', 'getDrivers', '$routeParams', function($scope, getDrivers, $routeParams) {
	getDrivers.success(function(data) {
	  $scope.detail = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[$routeParams.id];
	  $scope.index = $routeParams.id;
	});
}]);
