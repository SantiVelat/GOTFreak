/* global app */

app.controller('characterController', function ($routeParams, DataService) {
  var self = this
  var slugCharacter = $routeParams.slug
  DataService.getDetailsCharacter(slugCharacter)
    .then(function (response) {
      self.character = response.data.data
      DataService.getHouseEmblem(self.character.house)
        .then(function (responseTwo) {
          self.emblem = responseTwo.data.data.imageLink
          console.log(self.emblem)
        })
    })
})
