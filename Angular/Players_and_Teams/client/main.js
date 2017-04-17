var app = angular.module("app", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "partials/players.html"
        })
        .when("/teams", {
            templateUrl: "partials/teams.html"
        })
        .when("/associations", {
            templateUrl: "partials/associations.html"
        })
        .otherwise({
            redirectTo: "/"
        });
});

app.factory("playerFactory", function() {
    var factory = {};
    var players = [];

    factory.getPlayers = function(callback) {
        callback(players);
    }

    factory.add = function(player, callback) {
        players.push(player);
        callback(players);
    }

    factory.delete = function(player, callback) {
        players.splice(players.indexOf(player), 1);
        callback(players);
    }

    factory.assign = function(player, team, callback) {
        players[players.indexOf(player)].team = team;
        callback(players);
    }
    return factory;
})

app.factory("teamFactory", function() {
    var factory = {};
    var teams = [];

    factory.getTeams = function(callback) {
        callback(teams);
    }

    factory.add = function(newTeam, callback) {
        teams.push(newTeam);
        callback(teams);
    }

    factory.delete = function(team, callback) {
        teams.splice(teams.indexOf(team), 1);
        callback(teams);
    }

    factory.assign = function(player, team, callback) {
        teams[teams.indexOf(team)].players.push(player.name);
        callback(teams);
    }

    return factory;
})

app.controller("PlayersController", function($scope, playerFactory) {
    $scope.players = [];

    playerFactory.getPlayers(function(data) {
        $scope.players = data
    })

    $scope.add = function(newPlayer) {
        playerFactory.add(newPlayer, function(data) {
            $scope.players = data
        })
    }

    $scope.delete = function(player) {
        playerFactory.delete(player, function(data) {
            $scope.players = data
        })
    }
})

app.controller("TeamsController", function($scope, teamFactory) {
    $scope.teams = [];

    teamFactory.getTeams(function(data) {
        $scope.teams = data;
    })

    $scope.add = function(newTeam) {
        teamFactory.add(newTeam, function(data) {
            $scope.teams = data;
        });
    }

    $scope.delete = function(team) {
        teamFactory.delete(team, function(data) {
            $scope.teams = data;
        });
    }
})

app.controller("AssociationsController", function($scope, playerFactory, teamFactory) {
    $scope.teams = [];
    $scope.players = [];

    teamFactory.getTeams(function(data) {
        $scope.teams = data;
    });

    playerFactory.getPlayers(function(data) {
        $scope.players = data;
    });

    $scope.assign = function(player, team) {
        playerFactory.assign(player, team, function(data) {
            $scope.players = data;
        });
        teamFactory.assign(player, team, function(data) {
            $scope.teams = data;
        });
    };
});
