angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};
  $scope.error;

  $scope.addLink = function () {
  	$scope.loading = true;
    Links.addOne({url: $scope.link.url})
    .then(function (resp) {
    	$scope.loading = false;
      $location.path('/');
    });
  };
});
