'use strict';

/**
 * @ngdoc overview
 * @name devtranslateApp
 * @description
 * # devtranslateApp
 *
 * Main module of the application.
 */
 angular
    .module('devtranslateApp', [
        'ngAnimate',
        'ngAria',
        'ngMessages',
        'ngResource',
        'ngRoute',
        'ngTouch',
        'angular.filter',
        'ui.bootstrap'
        ])
    .config(function ($routeProvider) {
        $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl',
            controllerAs: 'mainCtrl'
        });
    }
);
