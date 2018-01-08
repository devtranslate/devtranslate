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
            self.languageList = DataService.getLanguageList();
            self.actualLanguage = self.languageList[0].image;

            self.changeLanguage = function(language) {
                getData(language);

                console.log(language);

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

            var getData = function(language) {
                return ApiService.getData(language).then(function(resp) {
                    self.result = resp.data;
                    self.displayItens = resp.data.data.slice(0, 9);
                }, function(error) {
                    console.log(error);
                });
            };

            self.init = (function(){
                getData(self.languageList[0].value);
            })();
      	}
    ]
);
