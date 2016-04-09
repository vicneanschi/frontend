angular.module('MyApp')
  .service('User', function() {
    var _user;

    this.getUser = function() {
      return _user;
    };

    this.setUser = function(user){
      console.log('setUser', user);
      _user = user;
    };

  });
