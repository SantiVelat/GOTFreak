/* global angular */
angular.module('GOTFreak')
   .config(function ($routeProvider) {
     $routeProvider
      .when('/search/:query', {
        templateUrl: 'app/routes/search/template.html'
      })
   })
