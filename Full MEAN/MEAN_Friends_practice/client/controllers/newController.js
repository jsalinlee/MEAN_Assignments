app.controller("newController", function($scope, friendsFactory) {
    var index = function() {
        friendsFactory.index(function(data) {
            console.log(data);
            $scope.friends = data;
        })
    }
    index();
    $scope.create = function() {
        friendsFactory.create($scope.newFriend, function(data) {
            $scope.friends = data;
        })
    }
})
