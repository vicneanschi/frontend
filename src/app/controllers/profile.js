angular.module('MyApp')
  .controller('ProfileCtrl', function($scope, $auth, toastr, Account, User) {
    $scope.getProfile = function() {
      Account.getMyProfile()
        .then(function(profile) {
          $scope.user = profile;
        })
        .catch(function(err) {
          toastr.error(err);
        });
    };
    $scope.updateProfile = function() {
      Account.updateProfile($scope.user)
        .then(function() {
          toastr.success('Profile has been updated');
        })
        .catch(function(response) {
          toastr.error(response.data.message, response.status);
        });
    };


    $scope.getProfile();
  });
