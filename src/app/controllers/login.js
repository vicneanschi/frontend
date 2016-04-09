angular.module('MyApp')
  .controller('LoginCtrl', function($scope, $location, $auth, toastr, User) {
    $scope.login = function() {
      console.log('login', $scope.user);

      $auth.login($scope.user)
        .then(function(result) {
          console.log(result);
          toastr.success('You have successfully signed in!');

          User.setUser(result.data.user);
          $location.path('/#/profile');
        })
        .catch(function(error) {
          toastr.error(error.data.message, error.status);
        });
    };

  });
