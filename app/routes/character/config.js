angular.module('GOTFreak')
   .config( function( $routeProvider ) {

    $routeProvider
      .when('/character/:id', {
        templateUrl: 'app/routes/character/template.html',
        controller: 'characterController',
        controllerAs: 'ctrl'
      })

  })
