var app = angular.module("app", []);
app.controller("foodController", function() {
    this.foods = [
        {label: "Strawberries"},
        {label: "Nopales"},
        {label: "Bok Choy"}
    ];

    this.add = function(data) {
        this.foods.push({label: data})
    }
});
