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
    var apiURL = 'https://devtranslate.github.io/api/';

    return {
      getApiURL: function () {
        return apiURL + 'language';
      }
    };
  }
);
