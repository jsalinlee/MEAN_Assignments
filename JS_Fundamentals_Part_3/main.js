function personConstructor(name) {
    return {
        name: name,
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
}

leadInstructor = personConstructor("Jay")
leadInstructor.say_something("go to Sports Day!")

function ninjaConstructor(name, cohort) {
    return {
        name: name,
        cohort: cohort,
        belt_level: "yellow-belt",
        levelUp: function () {
            if (this.belt_level === "yellow-belt") {
                this.belt_level = "red-belt";
            } else if (this.belt-level === "red-belt") {
                this.belt_level = "black-belt";
            }
        }
    }
}

ninja = ninjaConstructor("Jonathan", "Apr2017MEAN");
console.log(ninja.belt_level);
ninja.levelUp();
console.log(ninja.belt_level);
