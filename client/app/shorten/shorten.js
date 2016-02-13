angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.addOne = function () {
    Links.createLink({url: $scope.url});
  };
});
