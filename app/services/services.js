/* global app, alert */
(function() {

  //var url = 'https://api.got.show/api/characters/'
  var urlBase = 'https://got-api-proxy.herokuapp.com/'

  var app = angular.module('GOTFreak')
  app.service('DataService', function ($http) {

    var self = this

    self.searchCharacters = searchCharacters
    self.getDetailsCharacter = getDetailsCharacter
    self.getHouseEmblem = getHouseEmblem

    function searchCharacters( queryCharacter ) {

      var url = urlBase + 'characters/'

      function filterCharacterByQuery(character) {
        return character.name.toLowerCase().includes(queryCharacter.toLowerCase())
      }

      return $http.get(url)
                .then(function ( response ) {
                  return response.data
                })
                .then(function ( aAllCharacters ) {
                  return aAllCharacters.filter(filterCharacterByQuery)
                })
                .catch(function (error) {
                  console.log("Error from searchCharacters...");
                  console.log(error);
                })

    }

    function getDetailsCharacter(slugCharacter) {
      var url = urlBase + 'characters/bySlug/' + slugCharacter
      return $http.get(url)
    }

    function getHouseEmblem (houseName) {
      var url = urlBase + 'houses/' + houseName
      return $http.get(url)
    }
  })

})()
