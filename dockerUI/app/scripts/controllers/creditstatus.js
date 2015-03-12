'use strict';

/**
 * @ngdoc function
 * @name dockerUiApp.controller:CreditstatusCtrl
 * @description
 * # CreditstatusCtrl
 * Controller of the dockerUiApp
 */
angular.module('dockerUiApp')

  .controller('CreditstatusCtrl', ['$rootScope', '$scope', 'CreditRequestsBackend1', function ($rootScope, $scope, creditRequestsService) {

    $scope.loadData = function(){
      $scope.creditRequests = creditRequestsService.query();
    };

    $scope.loadData();
  }]);

