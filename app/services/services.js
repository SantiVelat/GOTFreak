/* global app */
/* global alert */
app.service('DataService', function ($http) {
  var self = this

  var url = 'https://api.got.show/api/characters/'
  // var url = 'https://got-api-proxy.herokuapp.com/characters/'

    // Get Characters at the beginning
  $http.get(url)
        .then(function (response) {
          self.characters = response.data
          console.log(self.characters)
        })
        .catch(function () { alert('Conexion error') })

  self.searchCharacter = function (query, callback) {
    var filteredCharacters = self.characters.filter(function (character) {
      return character.name.toLowerCase().includes(query.toLowerCase())
    })
    callback(filteredCharacters)
  }

  self.getDetailsCharacter = function (slugCharacter) {
    var url = 'https://api.got.show/api/characters/bySlug/' + slugCharacter
    /* var url = 'https://got-api-proxy.herokuapp.com/characters/bySlug/' + slugCharacter */
    return $http.get(url)
  }

  self.getHouseEmblem = function (houseName) {
    var url = 'https://api.got.show/api/houses/' + houseName
    /* var url = 'https://got-api-proxy.herokuapp.com/houses/' + houseName */
    return $http.get(url)
  }
})
