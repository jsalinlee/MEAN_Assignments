app.controller("editController", function($scope, friendsFactory, $routeParams) {
    friendsFactory.show($routeParams.id, function(returned_data) {
        $scope.friend = returned_data;
        console.log($scope.friend)
    })
    $scope.update($routeParams.id, function(returned_data){

    })
})
