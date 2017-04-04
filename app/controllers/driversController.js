app.controller('driversController', ['$scope', 'getDrivers', function($scope, getDrivers) {
  getDrivers.success(function(data) { 
  	$scope.driversList = data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
  	// $scope.improveScore = 
  });
}]);
