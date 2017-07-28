 /* global app */

app.controller('characterController', function ($routeParams, DataService) {
  var self = this
  var slugCharacter = $routeParams.slug

  console.log('characterController...')
  DataService.getDetailsCharacter(slugCharacter)
     .then(function (response) {
        self.character = response.data.data
        var defaultImage = 'http://vignette2.wikia.nocookie.net/pandorahearts/images/a/ad/Not_available.jpg/revision/latest?cb=20141028171337'
        self.image = self.character.imageLink ? 'https://api.got.show' + self.character.imageLink : defaultImage

        DataService.getHouseEmblem(self.character.house)
          .then(function (responseTwo) {
            self.emblem = responseTwo.data.data
            console.log(self.emblem)
          })
     })
})
