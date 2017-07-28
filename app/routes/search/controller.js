/* global app */
app.controller('searchCharacterController', function ($rootScope, $routeParams) {
  var self = this
  console.log('ok')
  self.query = $routeParams.characterQuery
  self.searchChar = function () {
    console.log('Controller search function called')
    $rootScope.$broadcast('onSearchReady', {character: self.query})
  }
  searchChar()
})

app.controller('ShowResultsController', function ($scope, $routeParams, DataService) {
  var self = this

  var imgNotFound = 'http://vignette2.wikia.nocookie.net/pandorahearts/images/a/ad/Not_available.jpg/revision/latest?cb=20141028171337'

  self.getImageCharacter = function (pathImg) {
    return pathImg ? 'https://api.got.show' + pathImg : imgNotFound
  }

  $scope.$on('onSearchReady', function (e, data) {
    console.log(data)
    DataService.searchCharacter(data.character, function (charactersFound) {
      self.found = charactersFound
      self.query = data.character
      console.log(self.found)
    })
  })
})
