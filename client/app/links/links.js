angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
    $scope.data = [];
    $scope.getLinks = function () {
        Links.getAllLinks().then(function(data) {
            $scope.data.links = data;
        });
    };
    (function init(){
    	$scope.getLinks();
    })();
});
