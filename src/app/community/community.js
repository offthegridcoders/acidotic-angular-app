
angular.module( 'acidoticRacing.community', [
  'ui.router'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'community', {
    url: '/community',
    views: {
      "main": {
        controller: 'CommunityCtrl',
        templateUrl: 'community/community.tpl.html'
      }
    },
    data:{
      pageTitle: 'Community'
    }
  });
})

.controller( 'CommunityCtrl', function CommunityController( $scope ) {
  $scope.test = 'Community';
});
