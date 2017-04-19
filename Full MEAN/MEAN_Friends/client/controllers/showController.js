app.controller("showController", function($scope, friendsFactory, $routeParams, $location) {
    friendsFactory.show($routeParams.id, function(data) {
        console.log("Successfully retrieved friend from the factory: ");
        $scope.friend = data.friend;
    });
});
