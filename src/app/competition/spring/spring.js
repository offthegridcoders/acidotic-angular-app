angular.module( 'acidoticRacing.spring', [
  'ui.router'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'spring', {
    url: '/spring',
    views: {
      "main": {
        controller: 'SpringCtrl',
        templateUrl: 'competition/spring/spring.tpl.html'
      }
    },
    data:{ pageTitle: 'Spring Competition', page: 'season' }
  });
})

.controller( 'SpringCtrl', function SpringController( $scope ) {
  $scope.test = 'Spring';
});
