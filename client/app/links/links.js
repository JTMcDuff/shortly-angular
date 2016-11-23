angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
   $scope.data = {};

   $scope.getAll = function() {
     Links.getAll()
     .then(function(results) {
       $scope.data.links = results;
     })
   };
   $scope.getAll();
});
