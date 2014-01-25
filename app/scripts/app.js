'use strict';

var projectorApp = angular.module('projectorClientAngularApp', [
  'ngResource',
  'ngRoute',
  'ui.bootstrap',
  'projectorControllers',
  'projectorFilters',
  'projectorServices'
]);


  projectorApp.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
	  // route requirements list page
		.when('/requirements', {
			templateUrl : 'views/requirement-list.html',
			controller  : 'requirementListController'
		})
	// route requirements details page
		.when('/requirements/:requirementId', {
			templateUrl : 'views/requirement-detail.html',
			controller  : 'requirementDetailController'
		})

  .when('/requirement-edit', {
      templateUrl : 'views/requirement-edit.html',
      controller  : 'requirementDetailController'
    })

      .otherwise({
        redirectTo: 'views/main.html'
      });
  });
