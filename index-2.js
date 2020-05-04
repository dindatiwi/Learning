class Vehicle {
  constructor(licensePlate, manufacture) {
      this.licensePlate = licensePlate;
      this.manufacture = manufacture;
      this.engineActive = false;
  }
}
class Car extends Vehicle {
   constructor(licensePlate, manufacture, wheels) {
       super(licensePlate, manufacture);
       this.wheels = wheels;
   }
   }
class VehicleFactory {
 static repair(vehicles) {
    vehicles.forEach(vehicle => {
      console.log(`Kendaraan ${vehicle.licensePlate} sedang melakukan perawatan`)
    })
  }
}
const johnCar = new Car("H121S", "Honda", 4);
const tomMotor = new Car("GF121J", "Yamaha", 2);
const dimasCar = new Car("TA1408K", "Tesla", 4);
 
/* Pemanggilan method repair langsung dari class-nya */
VehicleFactory.repair([johnCar, tomMotor, dimasCar]);
 