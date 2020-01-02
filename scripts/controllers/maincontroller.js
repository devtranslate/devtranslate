'use strict';

/**
 * @ngdoc function
 * @name devtranslateApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the devtranslateApp
 */
angular.module('devtranslateApp')
  .controller('MainCtrl', ['ApiService', 'DataService', '$translate',
    function (ApiService, DataService, $translate) {
      var self = this;
      
      var getData = function (page = 1, query = '') {
        return ApiService.getData(page, query).then(function (resp) {
          self.result = resp.data;
        }, function (error) {
          console.log(error);
        });
      };

      self.changePage = function (page, query) {
        getData(page, query);
      };

      self.search = function (query) {
        getData(1, query);
      };

      self.init = (function () {
        getData();
      })();
    }
  ]
  );
