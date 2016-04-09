angular.module('MyApp')
  .controller('MyMealsCtrl', function ($scope, toastr, Meal) {
    console.log('MyMealsCtrl');
    Meal.getMealsGroupedByDay()
      .then(function (meals) {
        $scope.meals = meals;
      })
      .catch(function (err) {
        toastr.error(err);
      })
  });
