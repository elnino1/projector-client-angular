'use strict';

describe('Controller: requirementListController', function () {

  // load the controller's module
  beforeEach(module('projectorClientAngularApp'));
  
  // load angular ui bootstrap module
  beforeEach(module('ui.bootstrap'));

  var reqListCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    reqListCtrl = $controller('requirementListController', {
      $scope: scope
    });
  }));




  it('should display the no requirement message', function () {
    expect(scope.requirements.length).toBe(0);
    expect(scope.reqMessage.length).not.toBe;
  });




});
