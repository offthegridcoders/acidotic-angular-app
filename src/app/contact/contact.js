
angular.module( 'acidoticRacing.contact', [
  'ui.router'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'contact', {
    url: '/contact',
    views: {
      "main": {
        controller: 'ContactCtrl',
        templateUrl: 'contact/contact.tpl.html'
      }
    },
    data:{
      pageTitle: 'Contact'
    }
  });
})

.controller( 'ContactCtrl', function CharityController( $scope ) {
  $scope.test = 'Contact';
});
