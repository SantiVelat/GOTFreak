app.controller('searchCharacterController', function($rootScope ) {
            var self = this;

            self.searchChar = function(){
            	console.log('Controller search function called');
            	$rootScope.$broadcast('onSearchReady', { character: self.query} )
            }
        });


 app.controller('ShowResultsController', function($scope, $routeParams, DataService) {
 	var self = this;
    self.imgNotFound = 'http://vignette2.wikia.nocookie.net/pandorahearts/images/a/ad/Not_available.jpg/revision/latest?cb=20141028171337'

    $scope.$on('onSearchReady', function(e, data) {
 		console.log(data)
 		DataService.searchCharacter(data.character, function(charactersFound) {
            self.found = charactersFound;
            console.log(self.found);
        });
 	})
  })