/* global angular */
angular.module('GOTFreak')
   .config(function ($routeProvider) {
     $routeProvider
      .when('/search/:characterQuery', {
        templateUrl: 'app/routes/search/template.html',
        controller: 'searchCharacterController'
      })
   })
