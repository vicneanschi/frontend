angular.module('MyApp')
    .factory('Meal', function ($http) {
        return {
            getMeal: function (id) {
                return $http.get('/api/meal/' + id);
            },

            createMeal: function (mealData) {
                var meal = {
                    title: mealData.title,
                    calories: mealData.calories,
                    eatenAtDate: mealData.eatenAtDate,
                    eatenAtTime: mealData.eatenAtTime.getHours() * 100 + mealData.eatenAtTime.getMinutes()
                };

                return $http.post('/api/meal', meal);
            },

            updateMeal: function (mealData) {
                var meal = {
                    id: mealData.id,
                    title: mealData.title,
                    calories: mealData.calories,
                    eatenAtDate: mealData.eatenAtDate,
                    eatenAtTime: mealData.eatenAtTime.getHours() * 100 + mealData.eatenAtTime.getMinutes()
                };

                return $http.put('/api/meal/' + mealData.id, meal);
            }
        };
    });