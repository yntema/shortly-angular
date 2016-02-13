angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.createLink = function () {
    Links.createLink({url: $scope.url});
  };
});
