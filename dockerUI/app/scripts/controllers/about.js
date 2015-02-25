'use strict';

/**
 * @ngdoc function
 * @name dockerUiApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the dockerUiApp
 */
angular.module('dockerUiApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
