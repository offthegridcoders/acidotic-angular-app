angular.module( 'acidoticRacing.fall', [
  'ui.router'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'fall', {
    url: '/fall',
    views: {
      "main": {
        controller: 'FallCtrl',
        templateUrl: 'competition/fall/fall.tpl.html'
      }
    },
    data:{ pageTitle: 'Fall Competition', page: 'season' }
  });
})

.controller( 'FallCtrl', function FallController( $scope ) {
  $scope.test = 'fall';
});
