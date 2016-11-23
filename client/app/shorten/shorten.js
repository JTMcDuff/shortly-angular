angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, $http, Links) {
  $scope.link = {};
  $scope.addLink = function(link) {
    return $http.post('/api/links',link)
    .then(function(results) {
       console.log('I ran!');
    })
  };
});
