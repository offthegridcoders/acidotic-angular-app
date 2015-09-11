angular.module( 'acidoticRacing.winter', [
  'ui.router'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'winter', {
    url: '/winter',
    views: {
      "main": {
        controller: 'WinterCtrl',
        templateUrl: 'competition/winter/winter.tpl.html'
      }
    },
    data:{ pageTitle: 'Winter Competition', page: 'season' }
  });
})

.controller( 'WinterCtrl', function WinterController( $scope ) {
  $scope.test = 'Winter';
});
