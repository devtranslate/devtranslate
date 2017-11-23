'use strict';

/**
 * @ngdoc function
 * @name devtranslateApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the devtranslateApp
 */
angular.module('devtranslateApp')
    .controller('MainCtrl', ['ApiService', '$location',
      	function (ApiService, $location) {
      		var self = this;

      		self.language = 'portuguese';

            var getData = function() {
                return ApiService.getData(self.language).then(function(resp) {
                    self.result = resp.data;
                }, function(error) {
                    console.log(error);
                });
            }

            self.init = (function(){
                getData();
            })();
      	}
    ]
);
