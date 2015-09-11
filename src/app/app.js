angular.module( 'acidoticRacing', [
  'acidoticRacing.constants',
  'templates-app',
  'templates-common',
  'acidoticRacing.winter',
  'acidoticRacing.spring',
  'acidoticRacing.summer',
  'acidoticRacing.fall',
  'acidoticRacing.charity',
  'acidoticRacing.community',
  'acidoticRacing.about',
  'acidoticRacing.contact',
  'ui.router'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider, DEFAULT_SEASON ) {
  $urlRouterProvider.otherwise( '/' + DEFAULT_SEASON );
})

.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location, DEFAULT_SEASON ) {
  $scope.defaultSeason = DEFAULT_SEASON;
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | acidoticRacing' ;
      $scope.season = toState.data.page || false;
    }
  });
});
