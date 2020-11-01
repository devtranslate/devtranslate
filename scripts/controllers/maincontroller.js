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
      self.currentPage = 1;
      self.totalNumberOfItems = 159;
      
      var getData = function () {
        return ApiService.getData(self.currentPage).then(function (resp) {
          self.result = resp.data;
        }, function (error) {
          console.log(error);
        });
      };

      self.changePage = function (page) {
        self.currentPage = page;
        getData(page);
      };

      self.init = (function () {
        getData();
      })();
    }
  ]
  );
