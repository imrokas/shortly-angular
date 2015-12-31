angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  $scope.addLink = function(url){
		Links.addLink(url)
			.then(function(data){
				$scope.link = data;
				$location.path('/links');
			});

  };

  $scope.submitForm = function(isValid, url) {
		// check to make sure the form is completely valid
		if (isValid) {
			$scope.addLink(url);
		}
	};
});
