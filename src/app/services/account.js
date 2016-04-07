angular.module('MyApp')
  .factory('Account', function($http) {
    return {
      getProfile: function(id) {
        return $http.get('/api/user/' + id);
      },
      updateProfile: function(profileData) {
        return $http.put('/api/user/' + profileData.id, profileData);
      }
    };
  });