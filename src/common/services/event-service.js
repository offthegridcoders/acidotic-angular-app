angular.module('acidoticRacing.services', ['firebase', 'acidoticRacing.constants'])

.factory('WinterService', ['$firebaseObject', '$firebaseArray', 'FIREBASE_URL',
  function ($firebaseObject, $firebaseArray, FIREBASE_URL) {
    return {
      list: function() {
        var ref = new Firebase(FIREBASE_URL + '/events/winter/items');
        return $firebaseArray(ref);
      },
      getQuotes: function() {
        var ref = new Firebase(FIREBASE_URL + '/events/winter/quotes');
        return $firebaseArray(ref);
      }
    };
  }
]);
