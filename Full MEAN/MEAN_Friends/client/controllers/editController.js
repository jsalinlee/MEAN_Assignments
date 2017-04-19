app.controller("editController", function($scope, friendsFactory, $routeParams, $location) {
    console.log("thse are the routeparams")
    console.log($routeParams.id)
    friendsFactory.show($routeParams.id, function(data) {
        console.log("data from the friends factory", data);
        if(!data) {
            $scope.errormessage = "Could not find the friend in the database."
        } else {
            $scope.friendToEdit = data.friend;
        }
    });

    $scope.edit = function(id, friendToUpdate) {
        friendsFactory.update(id, friendToUpdate, function(data) {
            console.log("Successfully updated the friend in the factory: ")
            console.log(data);
        });
        $location.url("/");
    };
});
