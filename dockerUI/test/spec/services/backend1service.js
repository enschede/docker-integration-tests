'use strict';

describe('Service: backend1Service', function () {

  // load the service's module
  beforeEach(module('dockerUiApp'));

  // instantiate service
  var backend1Service;
  beforeEach(inject(function (_backend1Service_) {
    backend1Service = _backend1Service_;
  }));

  it('should do something', function () {
    expect(!!backend1Service).toBe(true);
  });

});
