'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider
  .when('/view1', {
  	controller: 'driversController',
  	templateUrl: 'directives/driverInfo.html'
  })
  .when('/view1/drivers/:id', {
  	controller: 'singleDriverController',
  	templateUrl: 'directives/singleInfo.html'
  })
  .otherwise({redirectTo: '/view1'});
}]);
