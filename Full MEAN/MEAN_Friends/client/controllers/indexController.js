app.controller("indexController", function($scope, friendsFactory) {
    var index = function() {
        friendsFactory.index(function(data) {
            console.log("Sucessfully received all friends from the factory: " + data);
            $scope.friends = data.friends;
        });
    }
    index();

    $scope.delete = function(friend) {
        console.log(friend);
        friendsFactory.delete(friend._id, function(data) {
            console.log("Successfully deleted the friend from the factory: " + data);
            index();
        });
    }
});
