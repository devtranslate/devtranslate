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
	 	var apiURL = 'https://devtranslate.github.io/apinew/language';

	 	return {
	 		getApiURL: function() {
	 			return apiURL;
	 		},
	 		getLanguageList: function() {
	 			return [
	 			{   
	 				image: 'images/brazil.png',
	 				language: 'PTBR',
	 				value: 'portuguese'
	 			},
	 			{
	 				image: 'images/united-states.png',
	 				language: 'ENG',
	 				value: 'english'
	 			}
	 			];
	 		}
	 	};
	 }
 );
