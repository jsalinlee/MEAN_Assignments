var functionObject = {
    sumFromXToY: function(x, y) {
        var sum = 0;
        for (var i = x; i <= y; i++) {
            sum += i;
        }
        console.log(sum);
    },
    minInArray: function(arr) {
        var min = arr[0];
        for (var i = 1; i < arr.length; i++) {
            if (arr[i] < min) {
                min = arr[i];
            }
        }
        return min;
    },
    avgOfArray: function(arr) {
        var sum = arr[0]
        for (var i = 1; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum / arr.length;
    }
}
var array = [5, 23, 0, -8, 53]
functionObject.sumFromXToY(5,6);

var person = {
    name: "Jonathan",
    distance_traveled: 0,
    say_name: function() { alert(this.name); },
    say_something: function(string) {
        messageString = this.name + " says " + string;
        console.log(messageString);
    },
    walk: function() {
        alert(this.name + " is walking");
        this.distance_traveled += 3;
        return this.distance_traveled;
    },
    run: function() {
        alert(this.name + " is running");
        this.distance_traveled += 10;
        return this.distance_traveled;
    },
    crawl: function() {
        alert(this.name + " is crawling");
        this.distance_traveled += 1;
        return this.distance_traveled;
    }

}
person.say_name();
person.say_something("I am cool");
person.run();
person.walk();
person.crawl();
console.log(person.distance_traveled);
