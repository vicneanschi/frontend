angular.module('MyApp')
  .factory('Meal', function ($http, Account) {
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
      },

      getMealsGroupedByDay: function () {
        var _profile;
        
        return Account.getMyProfile().then(function (profile) {
          _profile = profile;
          
          return $http.get('/api/user/' + profile.id + '/meals'
            , {
              params: {
                groupBy: 'eatenAtDate',
                sum: 'calories',
                sort: '_id.eatenAtDate DESC'
              }
            }
          ).then(function (response) {

            return response.data.map(function (element) {
              element.overeaten = element.calories > _profile.dailyCaloriesLimit;
              return element;
            });
          });
        });
      },

      getMealsDetailsByDay: function (date) {
        return Account.getMyProfile().then(function (profile) {
          return $http.get('/api/user/' + profile.id + '/meals'
            , {
              params: {
                eatenAtDate: new Date(date)
              }
            }
          );
        });
      }
    };
  });
