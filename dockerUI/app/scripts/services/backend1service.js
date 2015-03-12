'use strict';

/**
 * @ngdoc service
 * @name dockerUiApp.backend1Service
 * @description
 * # backend1Service
 * Service in the dockerUiApp.
 */
var backend1Service = angular.module('dockerUiApp')
  .service('backend1Service', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function

  });


backend1Service.factory('CreditRequestsBackend1', ['$resource',
  function ($resource) {
    return $resource('/backend1/creditRequests/:id', {}, {
      query: {method: 'GET', params: {id: ''}, isArray: true}
    });
  }]);

backend1Service.factory('CreateCreditRequest', ['$http',
  function ($http) {
    return {
      sendCreditRequest: function (creditRequest) {
        return $http.post('/backend1/creditRequest', creditRequest);
      }
    };
  }]);


