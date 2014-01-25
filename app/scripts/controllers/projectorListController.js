 'use strict'; 

  projectorControllers.controller('requirementListController', ['$scope', 'requirementsFactory', '$location',
  function($scope, requirementsFactory, $location) {

  	$scope.requirements = requirementsFactory.query();
   
	$scope.reqMessage = $scope.requirements.length == 0 ? 
		'No requirements can be found, please create a new one'
		:
		'Currently displaying ' + $scope.requirements.length + ' requirements';

  	
	$scope.gotoRequirementNewPage = function() {
		$location.path('requirement-edit');
	}

	


  }]);