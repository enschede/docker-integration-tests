'use strict';

describe('Controller: NewcreditrequestCtrl', function () {

  // load the controller's module
  beforeEach(module('dockerUiApp'));

  var NewcreditrequestCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewcreditrequestCtrl = $controller('NewcreditrequestCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
