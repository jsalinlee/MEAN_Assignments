
//  inject the ngRoute dependency in the module.
var myApp = angular.module('myApp', ['ngRoute']);
//  use the config method to set up routing:
myApp.config(function ($routeProvider) {
  $routeProvider
    .when('/',{
        templateUrl: 'partials/customizeUsers.html'
    })
    .when('/partial2',{
        templateUrl: 'partials/usersList.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});

// inject the userFactory
myApp.factory("userFactory", function() {
    var factory = {};
    var users = [{fname: "Blah", lname: "Flah", favLang:"Slah"}];

    factory.index = function(callback) {
        callback(users);
    };

    factory.addUser = function(newUser, callback) {
        users.push(newUser);
        callback(users);
    };

    factory.deleteUser = function(user, callback) {
        users.splice(users.indexOf(user), 1);
        callback(users);
    };

    return factory;
})
//  build the controllers
myApp.controller('CustomizeUsersController', function($scope, userFactory, $location) {
    $scope.users = [];

    userFactory.index(function(data) {
        $scope.users = data;
    });

    $scope.create = function(newUser) {
        userFactory.addUser(newUser, function(data) {
            $scope.users = data;
        });
        $location.url("/partial2")
    };

    $scope.delete = function(user) {
        userFactory.deleteUser(user, function(data) {
            $scope.users = data;
        });
    };
});
myApp.controller('UserListController', function($scope, userFactory) {

    userFactory.index(function(data) {
        $scope.users = data;
    });
});
