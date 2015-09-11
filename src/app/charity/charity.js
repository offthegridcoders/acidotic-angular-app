
angular.module( 'acidoticRacing.charity', [
  'ui.router'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'charity', {
    url: '/charity',
    views: {
      "main": {
        controller: 'CharityCtrl',
        templateUrl: 'charity/charity.tpl.html'
      }
    },
    data:{
      pageTitle: 'Charity'
    }
  });
})

.controller( 'CharityCtrl', function CharityController( $scope ) {
  $scope.test = 'Charity';
});
