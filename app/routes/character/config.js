/* global angular */

angular.module('GOTFreak')
   .config(function ($routeProvider) {
     $routeProvider
      .when('/character/:slug', {
        templateUrl: 'app/routes/character/template.html',
        controller: 'characterController',
        controllerAs: 'vm'
      })
   })
