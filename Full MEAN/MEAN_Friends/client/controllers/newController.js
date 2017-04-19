app.controller("newController", function($scope, friendsFactory, $location) {
    $scope.create = function(newFriend) {
        friendsFactory.create(newFriend, function(data) {
            console.log("Successfully added new friend to the database! " + data);
        });
        $location.url("/");
    };
});
