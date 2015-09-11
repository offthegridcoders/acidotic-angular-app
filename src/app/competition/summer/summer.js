angular.module( 'acidoticRacing.summer', [
  'ui.router'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'summer', {
    url: '/summer',
    views: {
      "main": {
        controller: 'SummerCtrl',
        templateUrl: 'competition/summer/summer.tpl.html'
      }
    },
    data:{ pageTitle: 'Summer Competition', page: 'season' }
  });
})

.controller( 'SummerCtrl', function SummerController( $scope ) {
  $scope.test = 'summer';
});
