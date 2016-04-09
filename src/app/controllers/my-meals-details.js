angular.module('MyApp')
  .controller('MyMealsDetailsCtrl', function ($scope, $stateParams, toastr, Meal) {
    Meal.getMealsDetailsByDay($stateParams.date)
      .then(function (response) {
        $scope.date = $stateParams.date;

        response.data.forEach(function (element) {
          element.formatedTime = formatTime(element.eatenAtTime)
        });

        $scope.meals = response.data;
      })
      .catch(function (err) {
        toastr.error(response.data.message, response.status);
      })
  });

function formatTime(time){
  return moment(time, "hmm").format("HH:mm");
}
