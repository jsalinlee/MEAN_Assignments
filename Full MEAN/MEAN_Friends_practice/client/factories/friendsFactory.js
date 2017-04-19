console.log("Friends Factory");
app.factory("friendsFactory", ["$http", function($http) {
    var factory = {};
    factory.index = function(callback) {
        $http.get("/friends").then(function(returned_data) {
            console.log(returned_data);
            callback(returned_data.data);
        })
    }
    factory.show = function(id, callback) {
        $http.get("/friends/:id").then(function(returned_data) {
            console.log(returned_data.data);
            if(typeof(callback) == "function") {
                callback(returned_data.data)
            }
        })
    }
    factory.create = function(newFriend, callback) {
        $http.post("/friends", newFriend).then(function(returned_data) {
            console.log(returned_data.data);
            if(typeof(callback) == "function") {
                callback(returned_data.data)
            }
        })
    }
    factory.update = function(id, callback) {
        $http.put("/friends/:id").then(function(returned_data) {
            console.log(returned_data.data);
            if(typeof(callback) == "function") {
                callback(returned_data.data);
            }
        })
    }
    factory.delete = function(id, callback) {
        $http.delete("/friends/:id").then(function(returned_data) {
            console.log(returned_data.data);
            if(typeof(callback) == "function") {
                callback(returned_data.data);
            }
        })
    }
    return factory;
}])
