angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, fetchLinks) {
  // Your code here
  $scope.data = {};

  $scope.getLinks = function () {
    Links.getAll()
    .then(function (allLinks) {
      $scope.data.links = allLinks;
    });
  };

  $scope.data.links = Links.getAll();

});
