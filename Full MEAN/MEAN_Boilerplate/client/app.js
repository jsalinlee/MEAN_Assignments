var app = angular.module("app", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "partials/indexPartial.html",
            controller: "indexController"
        })
        .otherwise({
            redirectTo: "/"
        });
});
