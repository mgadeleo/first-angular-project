//define the module for the app
var angularTestApp = angular.module('angularTestApp', []);

//define the controller for the app module
angularTestApp.controller('testAppController', function testAppController($scope){
  $scope.items = [
    {
      name: 'This is a list item'
    }, {
      name: 'Another list item'
    }, {
      name: 'List item number 3'
    }, {
      name: 'Boring list item'
    }
  ]
})
