app.factory('getDrivers', ['$http', function($http) {
  return $http.get('http://ergast.com/api/f1/2013/driverStandings.json')
    .success(function(data){
      return data;
    })
    .error(function(error) {
      return error;
    });

//   var ergastAPI = {};

//   ergastAPI.getDrivers = function() {
//   	return $http({
//   		method: 'JSONP',
//   		url: 'http://ergast.com/api/f1/2013/driverStandings.json?callback=JSON_CALLBACK'
//   	})

// }
}]);
