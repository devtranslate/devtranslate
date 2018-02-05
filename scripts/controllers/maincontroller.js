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

      var getData = function (language) {
        return ApiService.getData(language).then(function (resp) {
          self.result = resp.data;
          self.displayItens = resp.data.data.slice(0, 6);
        }, function (error) {
          console.log(error);
        });
      };

      var getLanguageList = function (language) {
        return ApiService.getLanguage().then(function (resp) {
          self.languageList = resp.data.translation;
          self.actualLanguage = self.languageList[0].image;
          getData(self.languageList[0].language);
        }, function (error) {
          console.log(error);
        });
      }

      self.changeLanguage = function (language) {
        getData(language);

        switch (language) {
          case 'portuguese':
            self.actualLanguage = self.languageList[0].image;
            break;
          case 'english':
            self.actualLanguage = self.languageList[1].image;
            break;
        }

        $translate.use(language);
      };

      self.init = (function () {
        getLanguageList();
      })();
    }
  ]
  );
