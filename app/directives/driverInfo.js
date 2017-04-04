app.directive('driverInfo', 
	function() {
	  return {
	  	restrict: 'E',
	  	scope: {
	  		info: '='
	  	},
	  	templateUrl: 'directives/driverInfo.html'
	  }
});