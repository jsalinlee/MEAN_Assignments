var app = angular.module("app", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "partials/index.html",
            controller: "newController"
        })
        .when("/new", {
            templateUrl: "partials/new.html",
            controller: "newController"
        })
        .when("/edit", {
            templateUrl: "partials/edit.html",
            controller: "editController"
        })
        .when("/show", {
            templateUrl: "partials.show.html"
        })
        .otherwise({
            redirectTo: "/"
        });
});
