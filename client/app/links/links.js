angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, fetchLinks) {
  // Your code here
  $scope.data = {};

  $scope.data.links = fetchLinks;

});
