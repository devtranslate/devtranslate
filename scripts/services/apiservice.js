'use strict';

/**
 * @ngdoc service
 * @name devtranslateApp.ApiService
 * @description
 * # ApiService
 * Service in the devtranslateApp.
 */
angular.module('devtranslateApp')
  .service('ApiService', ['DataService', '$http',
    function (DataService, $http) {
      var apiURL = DataService.getApiURL();
      var pageSize = 6;

      var service = {
        getData: function (page, query) {
          return $http.get(apiURL + 'translations?page=' + page + '&pageSize=' + pageSize + '&query=' + query).then(function (resp) {
            return resp;
          }, function (error) {
            return error;
          });
        }
      };

      return service;
    }
  ]
);
