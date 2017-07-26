app.controller('searchCharacterController', function($rootScope ) {
            var self = this;

            self.searchChar = function(){
            	console.log('Controller search function called');
            	$rootScope.$broadcast('onSearchReady', { character: self.query} )
            }
        });


 app.controller('ShowResultsController', function($scope, $routeParams, searchService) {
 	$scope.$on('onSearchReady', function(e, data) {
 		console.log(data)
 		var self = this;
 		searchService.searchCharacter(data.character, function(charactersFound) {
                    $scope.found = charactersFound;
                    console.log($scope.found);
                });
 	})
 	
  })