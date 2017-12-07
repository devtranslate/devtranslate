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

	    	var service = {
	            getData: function(language) {
	                return $http.get(apiURL + '/' + language + '/translations.json').then(function(resp) {
	                    return resp;
	                }, function(error) {
	                    return error;
	                });
	            }
	        };

	        return service;
		}
	]
);
