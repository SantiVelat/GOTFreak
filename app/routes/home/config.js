/* global angular */
angular.module('GOTFreak')
   .config(function ($routeProvider) {
     $routeProvider
      .when('/', {
        templateUrl: '/app/routes/home/template.html'
      })
   })
