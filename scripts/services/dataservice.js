'use strict';

/**
 * @ngdoc service
 * @name devtranslateApp.DataService
 * @description
 * # DataService
 * Service in the devtranslateApp.
 */
angular.module('devtranslateApp')
  .service('DataService', function () {
    return {
      getApiURL: function () {
        return 'https://api.devtranslate.io/';
      }
    };
  }
);
