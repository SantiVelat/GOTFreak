app.controller('searchCharacterController', function($rootScope ) {
            var self = this;

            self.searchChar = function(){
            	console.log('Controller search function called');
            	$rootScope.$broadcast('onSearchReady', { character: self.query} )
            }
        });


 app.controller('ShowResultsController', function($scope, $routeParams, searchService) {
 	var self = this;
    $scope.$on('onSearchReady', function(e, data) {
 		console.log(data)
 		searchService.searchCharacter(data.character, function(charactersFound) {
                    self.found = charactersFound;
                    console.log(self.found);
                });
 	})

    /*self.filter=funtion(characterImg){
        var imgDefault='img/defaultImg.jpg';
        if(characterImg){
            return characterImg;
        }
        else{
            return imgDefault;
        }
    }*/
 	
  })