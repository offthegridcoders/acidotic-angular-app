angular.module( 'acidoticRacing.winter', [
  'ui.router',
  'acidoticRacing.services'
])

.config(function config($stateProvider) {
  $stateProvider.state( 'winter', {
    url: '/winter',
    views: {
      "main": {
        controller: 'WinterCtrl',
        templateUrl: 'competition/winter/winter.tpl.html'
      }
    },
    resolve: {
      Events:  function(WinterService){
        return WinterService.list();
      },
      Quotes:  function(WinterService){
        return WinterService.getQuotes();
      }
    },
    data:{ pageTitle: 'Winter Competition', page: 'season' }
  });
})

.controller( 'WinterCtrl', function WinterController($scope, Events, Quotes) {
  console.log(Events);
  console.log(Quotes);
  $scope.events = Events;
  $scope.quotes = Quotes;
  $scope.season = 'Winter';
});
