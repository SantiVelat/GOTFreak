angular.module('GOTFreak')
   .config( function( $routeProvider ) {

    $routeProvider
      .when('/:id', {
        templateUrl: 'app/routes/character/template.html',
        controller: 'characterController'
      })

  })
