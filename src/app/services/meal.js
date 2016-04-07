angular.module('MyApp')
  .factory('Meal', function($http) {
    return {
      
      createMeal: function(mealData) {
          var meal = {
              title: mealData.title,
              calories: mealData.calories,
              eatenAtDate: mealData.eatenAtDate,
              eatenAtTime: mealData.eatenAtTime.getHours() * 100 + mealData.eatenAtTime.getMinutes(),
              owner: 1
          };

          return $http.post('/api/user/1/meals', meal);
      }
    };
  });