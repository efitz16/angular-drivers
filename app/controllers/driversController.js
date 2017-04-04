app.controller('driversController', ['$scope', 'getDrivers', function($scope, getDrivers) {
  getDrivers.success(function(data) { 
  	$scope.driversList = data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
  	$scope.increasePoints = function(index) {
  		// debugger;
  	  var newScore = parseInt($scope.driversList[index].points) + 1;
  	  $scope.driversList[index].points = newScore;
  	}
  });
}]);
