app.controller('characterController', function($routeParams, DataService) {

  var self = this

  var slugCharacter = $routeParams.slug
  DataService.getDetailsCharacter(slugCharacter)
    .then( function( response ) {
      self.character = response.data.data
      console.log(self.character);
    })

})