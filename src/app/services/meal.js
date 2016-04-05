angular.module('MyApp')
  .factory('Meal', function($http) {
    return {
      
      createMeal: function(mealData) {
        return $http.post('/api/meal', mealData);
      }
    };
  });