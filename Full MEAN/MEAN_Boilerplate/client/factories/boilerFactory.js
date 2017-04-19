app.factory("boilerFactory", ["$http", function($http) {
    var factory = {};
    factory.index = function(callback) {
        $http.get("/boiler").then(function(returned_data) {
            callback(returned_data.data);
        });
    };

    factory.show = function(id, callback) {
        $http.get("/boiler/" + id).then(function(returned_data) {
            callback(returned_data.data);
        });
    };

    factory.create = function(newModel, callback) {
        $http.post("/boiler", newModel).then(function(returned_data) {
            callback(returned_data.data);
        });
    };

    factory.update = function(id, modelToEdit, callback) {
        $http.put("/boiler/" + id, modelToEdit).then(function(returned_data) {
            callback(returned_data.data)
        });
    };

    factory.delete = function(id, callback) {
        $http.delete("/boiler/" + id).then(function(returned_data) {
            callback(returned_data.data);
        });
    };

    return factory;
}]);
