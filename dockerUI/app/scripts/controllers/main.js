'use strict';

/**
 * @ngdoc function
 * @name dockerUiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dockerUiApp
 */
angular.module('dockerUiApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
