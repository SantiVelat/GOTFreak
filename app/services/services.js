app.service('DataService', function($http) {

    var self = this;

    var url = 'https://api.got.show/api/characters/';

    // Get Characters at the beginning
    $http.get(url)
        .then(function(response) {
            self.characters = response.data;
            console.log(self.characters);
        })
        .catch(function(){ alert('Conexion error') });

    self.searchCharacter = function(query, callback) {

        var filteredCharacters = self.characters.filter( function( character ) {
            return character.name.toLowerCase().includes( query.toLowerCase() )
        })
        callback(filteredCharacters);
    };

    self.getDetailsCharacter = function( slugCharacter ) {
        var url = 'https://api.got.show/api/characters/bySlug/' + slugCharacter;
        return $http.get(url)
    }


});