angular.module('MyApp')
  .controller('MealCtrl', function($scope, $auth, toastr, Meal) {
    
    $scope.createMeal = function() {
      Meal.createMeal($scope.meal)
        .then(function() {
          toastr.success('Meal has been created');
        })
        .catch(function(response) {
          toastr.error(response.data.message, response.status);
        });
    };   

    
  });
