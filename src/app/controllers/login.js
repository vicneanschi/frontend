angular.module('MyApp')
  .controller('LoginCtrl', function($scope, $location, $auth, toastr) {
    $scope.login = function() {
      console.log('login', $scope.user);
      $auth.login($scope.user)
        .then(function() {
          toastr.success('You have successfully signed in!');
          $location.path('/#/profile/1');
        })
        .catch(function(error) {
          toastr.error(error.data.message, error.status);
        });
    };

  });
