angular.module('MyApp')
  .controller('MealCtrl', function ($scope, $auth, $stateParams, toastr, Meal) {
    //console.log($stateParams.mealId);

    var createOrUpdateMeal;

    if ($stateParams.mealId) {
      console.log($stateParams.mealId);

      Meal.getMeal($stateParams.mealId)
        .then(function (response) {
          var data = response.data;

          $scope.meal = {
            id: data.id,
            title: data.title,
            calories: data.calories,
            eatenAtDate: new Date(data.eatenAtDate),
            eatenAtTime: new Date(0, 0, 0, ~~(data.eatenAtTime / 100), data.eatenAtTime % 100)
          };
        })
        .catch(function (response) {
          toastr.error(response.data.message, response.status);
        });

      createOrUpdateMeal = updateMeal;
    } else {
      createOrUpdateMeal = createMeal;
    }

    $scope.createMeal = function () {

      createOrUpdateMeal();
    };

    $scope.delete = function ($event, id) {
      $event.preventDefault();
      $event.stopPropagation();
      console.log('delete meal', id);

      Meal.delete(id)
        .then(function () {
          toastr.success('Meal has been deleted ');
        })
        .catch(function (err) {
          toastr.error(err);
        })

    };

    function updateMeal() {
      Meal.updateMeal($scope.meal)
        .then(function () {
          toastr.success('Meal has been updated');
        })
        .catch(function (response) {
          toastr.error(response.data.message, response.status);
        });
    }

    function createMeal() {
      Meal.createMeal($scope.meal)
        .then(function () {
          toastr.success('Meal has been created');
        })
        .catch(function (response) {
          toastr.error(response.data.message, response.status);
        });
    }


  });
