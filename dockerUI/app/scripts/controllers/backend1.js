'use strict';

/**
 * @ngdoc function
 * @name dockerUiApp.controller:Backend1Ctrl
 * @description
 * # Backend1Ctrl
 * Controller of the dockerUiApp
 */


angular.module('dockerUiApp')
  .controller('Backend1Ctrl', ['$rootScope', '$scope', 'MeldingenBackend1', 'SendMessageService', function ($rootScope, $scope, MeldingenBackend1, SendMessageService) {


    $rootScope.alerts = $rootScope.alerts || [];

    $rootScope.alerts = $rootScope.alerts || [];
    $rootScope.closeAlert = function(alert)
    {
      $rootScope.alerts.splice($rootScope.alerts.indexOf(alert), 1);
    };

    $scope.pushMessage = function () {
      SendMessageService.sendMessage().
        success(function (data, status, headers, config) {
          // this callback will be called asynchronously
          // when the response is available
          $rootScope.alerts.push({message: data.result, type: 'success'});
          $scope.loadData();
        }).
        error(function (data, status, headers, config) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          var message = "Status: " + status + ": " + angular.toJson(data,true);
          $rootScope.alerts.push({message: message, type: 'danger'});
        });
    };

    $scope.loadData = function(){
      $scope.meldingen = MeldingenBackend1.query();
    };

    $scope.loadData();

  }]);

