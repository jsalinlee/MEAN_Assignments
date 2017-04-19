app.controller("indexController", function($scope, boilerFactory) {
    var index = function() {
        boilerFactory.index(function(data) {

        });
    }
    index();
});
