app.service('searchService', function($http) {
    var self = this;


    function filter(query) {
        return self.characters.filter(function(character) {
            if (character.name.indexOf(query) !== -1) {
                return character;
            };
        });
    };

    self.searchCharacter = function(query, callback, onError) {
        console.log('Services search Character called');
        //var sluggedQuery = query.split(' ').join('_');
        var capitalizedQuery = capitalizeWords(query);
        //console.log(capitalizedQuery);
        if (!self.characters) {
            //var url = 'characters.json';
            var url = 'https://api.got.show/api/characters/';
            $http.get(url)
                .then(function(response) {
                    self.characters = response.data;
                    obtainArrayOfCharacters(capitalizedQuery);
                    callback(self.searchedCharacters);
                }, function(response) {
                    onError(response);
                });
        } else {
            obtainArrayOfCharacters(capitalizedQuery);
            callback(self.searchedCharacters);
        };
        
    };


    function obtainArrayOfCharacters(lookedValue) {
        self.searchedCharacters=[];
        for (var i = 0; i < self.characters.length; i++) {
            //console.log('for Entered');
            var character = self.characters[i];
            if (character.name.indexOf(lookedValue) !== -1) {
                //console.log(character)
                self.searchedCharacters.push(character);
            }
        };
        //console.log(self.searchedCharacters);
    };

    function capitalizeWords(str) {
        return str.replace(/\w\S*/g, function(txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
    }

});