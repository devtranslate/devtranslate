'use strict';

/**
 * @ngdoc function
 * @name devtranslateApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the devtranslateApp
 */
angular.module('devtranslateApp')
    .controller('MainCtrl', ['ApiService',
      	function (ApiService) {
            var self = this;

      		self.language = 'portuguese';

            /*self.changePage = function(array) {
                self.displayItens.push(array.slice( 9 * (self.currentPage - 1), 9 * self.currentPage));
            };*/

            self.init = (function(){
                return ApiService.getData(self.language).then(function(resp) {
                    self.result = resp.data;
                    self.displayItens = resp.data.data.slice(0, 9);
                }, function(error) {
                    console.log(error);
                });
            })();
      	}
    ]
);
