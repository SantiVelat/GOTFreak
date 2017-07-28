/* global app */
app.controller('SearchFormController', function ($location, $rootScope) {

  var self = this
  $rootScope.query = ''

  self.searchCharacter = function () {
    var query = $rootScope.query
    $location.path('/search/' + query)
  }

})
