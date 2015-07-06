'use strict';

/**
 * @ngdoc overview
 * @name wailtnewApp
 * @description
 * # wailtnewApp
 *
 * Main module of the application.
 */
angular
  .module('wailtnewApp', [
    'ngAnimate',
    'ngCookies',
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
      .when('/activity', {
        templateUrl: 'views/activity.html',
        controller: 'ActivityCtrl'
      })
      .when('/favorites', {
        templateUrl: 'views/favorites.html',
        controller: 'FavoritesCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })

  .directive('imageonload', ['$timeout', function($timeout) {
    return {
        restrict: 'ACE',
        link: function(scope, element, attrs) {
            // var promise = $timeout(function() {
                element.bind('load', function() {
                    angular.element(document.getElementsByClassName('preloader')).addClass('loaded');
                    setTimeout(function() {
                        angular.element(document.getElementsByClassName('preloader')).addClass('hidden');
                    }, 1000);
                });
            // }, 2000)
            /*
            .then(function() {
                angular.element(document.getElementsByClassName('preloader')).addClass('loaded');
                setTimeout(function() {
                    angular.element(document.getElementsByClassName('preloader')).addClass('hidden');
                }, 1000);
            });
            */
        }
    };
}]);
