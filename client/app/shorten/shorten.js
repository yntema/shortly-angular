angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.addLink = function () {
    Links.addOne({url: $scope.link});
  };
});
