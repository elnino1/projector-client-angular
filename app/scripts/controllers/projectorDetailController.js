'use strict';

  
projectorControllers.controller('requirementDetailController', [
	'$scope', '$routeParams', '$http', '$location', 'requirementsFactory', 
  function($scope, $routeParams, $http, $location, requirementsFactory) {
    /*$http.get('phones/' + $routeParams.phoneId + '.json').success(function(data) {
      $scope.phone = data;
    });*/


	var req = requirementsFactory.show($routeParams.requirementId);

	if(req) {
		$scope.requirement = req;
	}



	  $scope.gotoRequirementPage = function(){
	  	$location.path('requirements');
	  }



	$scope.createRequirement = function(){
			requirementsFactory.create($scope.requirement);
            $location.path('requirements');
	  }

    }


  ]);