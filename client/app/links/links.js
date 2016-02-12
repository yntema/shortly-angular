angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.links = [];

  $scope.allLinks = function () {
  	Links.getLinks()
  	.then(function(allLinks) {
  		$scope.links = allLinks;
  	});
  };

  $scope.newLink = function (url) {
  	Links.newLink(url);
  };

});
