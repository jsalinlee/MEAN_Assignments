var testArray = [1, 2, 32, -94, 9]

function addFive(number) {
    return number + 5;
}

function combine(number1, number2) {
    return number1 + number2;
}

function conditional(number) {
    if (number % 2 === 0) {
        return number;
    }
}

var _ = {
    map: function(array, callback) {
        var newArray = []
        for (var i = 0; i < array.length; i++) {
            if (typeof callback === "function") {
                newArray.push(callback(array[i]));
            }
        }
        return newArray;
    },

    reduce: function(array, callback) {
        var sum = 0;
        for (var i = 0; i < array.length; i++) {
            if (typeof callback === "function") {
                sum = callback(sum, array[i]);
            }
        }
        return sum;
    },

    find: function(array, callback) {
        for (var i = 0; i < array.length; i++) {
            if (typeof callback === "function") {
                if (callback(array[i])) {
                    return array[i];
                }
            }
        }
    },

    filter: function(array, callback) {
        newArray = [];
        for (var i = 0; i < array.length; i++) {
            if (typeof callback === "function") {
                if (callback(array[i])) {
                    newArray.push(array[i]);
                }
            }
        }
        return newArray;
    },

    reject: function(array, callback) {
        newArray = [];
        for (var i = 0; i < array.length; i++) {
            if (typeof callback === "function") {
                if (!(callback(array[i]))) {
                    newArray.push(array[i]);
                }
            }
        }
        return newArray;
    }
}

console.log(_.map(testArray, function(number){ return number + 6 }));
console.log(_.reduce(testArray, combine));
console.log(_.find(testArray, conditional));
console.log(_.filter(testArray, conditional));
console.log(_.reject(testArray, conditional));
