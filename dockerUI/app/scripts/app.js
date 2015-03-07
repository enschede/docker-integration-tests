'use strict';

/**
 * @ngdoc overview
 * @name dockerUiApp
 * @description
 * # dockerUiApp
 *
 * Main module of the application.
 */
angular
  .module('dockerUiApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/backend1', {
        templateUrl: 'views/backend1.html',
        controller: 'Backend1Ctrl'
      })
      .when('/newCreditRequest', {
        templateUrl: 'views/newcreditrequest.html',
        controller: 'NewcreditrequestCtrl'
      })
      .when('/creditStatus', {
        templateUrl: 'views/creditstatus.html',
        controller: 'CreditstatusCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
