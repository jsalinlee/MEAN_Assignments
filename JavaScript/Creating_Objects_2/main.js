function VehicleConstructor(name, numWheels, numPassengers, speed) {
    var self = this;
    var distance_travelled = 0;
    var updateDistanceTravelled = function() {
        distance_travelled += self.speed;
        console.log(distance_travelled);
    }

    self.name = name;
    self.numWheels = numWheels;
    self.numPassengers = numPassengers;
    self.speed = 20;

    self.makeNoise = function() {
        console.log("Make some Noise!");
    }

    self.move = function() {
        updateDistanceTravelled();
        self.makeNoise();
    }

    self.checkMiles = function() {
        console.log(distance_travelled);
    }

}

var Bike = new VehicleConstructor("bike", 2, 1);
Bike.move();
Bike.checkMiles();


var Sedan = new VehicleConstructor("sedan", 4, 5);
Sedan.makeNoise = function() {
    console.log("Honk Honk!");
}

var Bus = new VehicleConstructor("bus", 4, 25);
Bus.pickUpPassengers = function(numPassengers) {
    Bus.numPassengers += numPassengers;
}
Bus.pickUpPassengers(6);
Bus.pickUpPassengers(5);
console.log(Bus.numPassengers);
