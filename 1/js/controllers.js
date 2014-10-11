var myNameSpace = angular.module('myApp', []);

myApp.controller('MyController', function MyController($scope) {
  $scope.author = {
    'name' : 'Tony Chung',
    'title' : 'Web Dev',
    'company' : 'N/A'
  }
});
