'use strict';

describe('Service: DataService', function () {

  // load the service's module
  beforeEach(module('devtranslateApp'));

  // instantiate service
  var DataService;
  beforeEach(inject(function (_DataService_) {
    DataService = _DataService_;
  }));

  it('should do something', function () {
    expect(!!DataService).toBe(true);
  });

});
