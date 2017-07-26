app.controller('characterController', function($routeParams, DataService) {

  var self = this

  var idCharacter = $routeParams.id
  DataService.getDetailsCharacter(idCharacter)
    .then( function( response ) {
      self.character = response.data.data
      console.log(self.character);
    })

})