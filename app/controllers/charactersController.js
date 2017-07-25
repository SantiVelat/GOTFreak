app.controller('searchCharacterController',['searchService', function(searchService) {
            var self = this;

            self.searchChar = function(){
            	console.log('Controller search function called');
                searchService.searchCharacter(self.query, function(charactersFound) {
                    self.found = charactersFound;
                    console.log(self.found);
                });
            }
        }]);