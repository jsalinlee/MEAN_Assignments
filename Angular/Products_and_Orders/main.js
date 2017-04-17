var app = angular.module("app", []);

app.factory("POFactory", function() {
    var factory = {};
    var products = [
        {name: "Nutella", price: "4.99", quantity: 50}
    ];

    factory.index = function(callback) {
        callback(products);
    };

    factory.addProduct = function(data, callback) {
        products.push(data);
        callback(products);
    };

    factory.buy = function(data, callback) {
        var product = products[products.indexOf(data)]
        product.quantity--;
        if(product.quantity <= 0) {
            product.quantity = 0;
        }
        callback(products);
    }

    factory.delete = function(data, callback) {
        products.splice(products.indexOf(data), 1)
    }

    return factory;
});

app.controller("productsController", function(POFactory) {
    self = this;
    self.products = [];
    POFactory.index(function(data) {
        self.products = data;
    });

    this.add = function(data) {
        POFactory.addProduct(data, function(products) {
            self.products = products;
        })
    }

    this.delete = function(data) {
        POFactory.delete(data, function(products) {
            self.products = products;
        })
    }
});

app.controller("ordersController", function(POFactory) {
    self = this;
    self.orders = [];
    POFactory.index(function(data) {
        self.orders = data;
    });

    this.buy = function(data) {
        POFactory.buy(data, function(orders) {
            self.orders = orders
        });
    }
});
