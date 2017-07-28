/* global app */
app.controller('searchCharacterController', function ($routeParams, DataService) {

  var self = this
  self.query = $routeParams.query

  var imgNotFound = 'http://vignette2.wikia.nocookie.net/pandorahearts/images/a/ad/Not_available.jpg/revision/latest?cb=20141028171337'

  self.getImageCharacter = function (pathImg) {
    return pathImg ? 'https://api.got.show' + pathImg : imgNotFound
  }

  DataService.searchCharacters(self.query)
    .then(function (charactersFound) {
      self.found = charactersFound
    })

})