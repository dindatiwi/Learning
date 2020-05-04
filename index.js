
class Car {
    constructor(manufacture, color) {
        this.manufacture = manufacture;
        this.color = color;
        this.enginesActive = false;
    }
    
    startEngines() {
        console.log("Mesin dinyalakan");
        this.enginesActive = false;
    }
    
    info() {
        console.log(`Manufacture: ${this.manufacture}`);
        console.log(`Color: ${this.color}`);
        console.log(`Engines: ${this.enginesActive ? "Active" : "Inactive"}`);
    }
}
 
const johnCar = new Car("Honda", "Red");
 
johnCar.startEngines();
johnCar.info();