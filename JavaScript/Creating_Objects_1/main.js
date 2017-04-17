function VehicleConstructor(name, numWheels, numPassengers) {
        var vehicle = {};

        vehicle.name = name;
        vehicle.numWheels = numWheels;
        vehicle.numPassengers = numPassengers;

        vehicle.makeNoise = function() {
            console.log("Make some Noise!");
        };

        return vehicle;

}

var Bike = VehicleConstructor("bike", 2, 1);
Bike.makeNoise = function() {
    console.log("ring ring!");
}
Bike.makeNoise();

var Sedan = VehicleConstructor("sedan", 4, 5);
Sedan.makeNoise = function() {
    console.log("Honk Honk!");
}

var Bus = VehicleConstructor("bus", 4, 25);
Bus.pickUpPassengers = function(numPassengers) {
    Bus.numPassengers += numPassengers;
}
Bus.pickUpPassengers(6);
Bus.pickUpPassengers(5);
console.log(Bus.numPassengers);
