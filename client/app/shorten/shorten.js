angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.createLink = function (url) {
    console.log('shorten.js - creating url: ', url);
    Links.newLink(url);
  };
});
