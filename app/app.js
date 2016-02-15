'use strict';
//just new
// This is Local 2200
// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
//comment - just added by angelo
// MEP-2200 added
// added in server
//just updated
//added some new mep9000
//before M17
//added m8
