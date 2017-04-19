app.factory("friendsFactory", ["$http", function($http) {
    var factory = {};
    var editFriend;
    factory.index = function(callback) {
        $http.get("/friends").then(function(returned_data) {
            console.log("Received all friends from the database! " + returned_data);
            callback(returned_data.data);
        });
    };

    factory.show = function(id, callback) {
        console.log("ID to send to the database" + id)
        $http.get("/friends/" + id).then(function(returned_data) {
            console.log("Received single friend from the database! ")
            console.log(returned_data.data);
            callback(returned_data.data);
        });
    };

    factory.create = function(newFriend, callback) {
        $http.post("/friends", newFriend).then(function(returned_data) {
            console.log("Sent new friend to be added to the database! " + returned_data);
            callback(returned_data.data);
        });
    };

    factory.update = function(id, editee, callback) {
        $http.put("/friends/" + id, editee).then(function(returned_data) {
            console.log("Sent friend to be updated in the database! " + returned_data);
            callback(returned_data.data)
        });
    };

    factory.delete = function(id, callback) {
        $http.delete("/friends/" + id).then(function(returned_data) {
            console.log("Sent friend to be removed from the database! " + returned_data);
            callback(returned_data.data);
        });
    };

    return factory;
}]);
