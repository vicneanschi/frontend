angular.module('MyApp')
  .factory('Meal', function($http) {
    return {
      
      createMeal: function(mealData) {
          var meal = {
              title: mealData.title,
              calories: mealData.calories,
              eatenAtDate: mealData.eatenAtDate,
              eatenAtTime: mealData.eatenAtTime.getHours() * 100 + mealData.eatenAtTime.getMinutes()
          };

          return $http.post('/api/meal', meal);
      }
    };
  });