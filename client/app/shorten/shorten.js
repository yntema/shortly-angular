angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};
  $scope.error;

  $scope.addLink = function () {
    Links.addOne({url: $scope.link.url})
    .then(function (resp) {
      return $scope.error = resp;
    });
  };
});
