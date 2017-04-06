function VehicleConstructor(name, numWheels, numPassengers, speed) {
    this.distance_travelled = 0;
    this.name = name;
    this.numWheels = numWheels;
    this.numPassengers = numPassengers;
    this.speed = speed;
}

VehicleConstructor.prototype.updateDistanceTravelled = function() {
    this.distance_travelled += this.speed;
    console.log(this.distance_travelled);
    return this;
}

VehicleConstructor.prototype.makeNoise = function() {
    console.log("Make some Noise!");
    return this;
}

VehicleConstructor.prototype.move = function() {
    this.updateDistanceTravelled();
    this.makeNoise();
    return this;
}

VehicleConstructor.prototype.checkMiles = function() {
    console.log(this.distance_travelled);
    return this;
}


var Bike = new VehicleConstructor("bike", 2, 1, 5);
Bike.makeNoise = function() {
    console.log("ring ring!");
}
Bike.move();
Bike.checkMiles();


var Sedan = new VehicleConstructor("sedan", 4, 5, 40);
Sedan.makeNoise = function() {
    console.log("Honk Honk!");
}

var Bus = new VehicleConstructor("bus", 4, 25, 25);
Bus.pickUpPassengers = function(numPassengers) {
    Bus.numPassengers += numPassengers;
}
Bus.pickUpPassengers(6);
Bus.pickUpPassengers(5);
console.log(Bus.numPassengers);
