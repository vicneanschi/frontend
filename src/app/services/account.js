angular.module('MyApp')
  .factory('Account', function($http, $q, User) {
    return {
      getMyProfile: function() {
        return $http.get('/api/user/me').then(function (response) {
          return response.data;
        });

        // return defer;
      },
      getProfile: function(id) {
        // var defer = $q.defer();

        return $http.get('/api/user/' + id).then(function (response) {
          User.setUser(response.data);

          // defer.resolve(response.data);
          return response.data;
        }).catch(function(err){
          defer.reject('Failed to get user profile');
        });

        // return defer;
      },
      updateProfile: function(profileData) {
        return $http.put('/api/user/' + profileData.id, profileData);
      }
    };
  });
