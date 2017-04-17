var app = angular.module("app", []);

app.factory("productFactory", function() {
    var products = [
        {name:'Keyboard', price: 149.99},
        {name:'Mouse', price: 59.99},
        {name:'Basketball', price: 21.99}
    ];
    var factory = {};
    factory.index = function(callback) {
        callback(products);
    }

    factory.addProduct = function(data, callback) {
        products.push(data);
        callback(products);
    }

    factory.delete = function(data, callback) {
        for(var i = 0; i < products.length; i++) {
            if(data == products[i]) {
                products.splice(i, 1);
            }
        }
    }

    return factory;
});

app.controller("productsController", function(productFactory) {
    self = this;
    self.products = [];
    productFactory.index(function(data) {
        self.products = data;
    });

    this.add = function(data) {
        productFactory.addProduct(data, function(products) {
            self.products = products;
        });
    }

    this.delete = function(data) {
        productFactory.delete(data, function(products) {
            self.products = products;
        })
    }
});
