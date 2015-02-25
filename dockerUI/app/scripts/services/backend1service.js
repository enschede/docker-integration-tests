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


backend1Service.factory('MeldingenBackend1', ['$resource',
  function ($resource) {
    return $resource('/backend1/meldingen/:meldingId', {}, {
      query: {method: 'GET', params: {meldingId: ''}, isArray: true}
    });
  }]);

backend1Service.factory('SendMessageService', ['$http',
  function ($http) {
    return {
      sendMessage: function () {
        return $http.get('/backend1/triggerMessage');
      }
    };
  }]);


