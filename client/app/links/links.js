angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.links = [];

  $scope.getLinks = function () {
    Links.getLinks()
    .then(function (allLinks) {
      console.log('links.js - all links fetched: ', allLinks);
      $scope.links = allLinks;
    });
  };

});
