"use strict";
class Car {
    //2.A constructor that initializes the make, model, and year properties.
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    //2.Implement the start method to log "Car engine started" to the console.
    start() {
        console.log(`Car engine started`);
    }
}
//3.Create an instance of the Car class and initialize it with some values for make, model, and year.
const mycar = new Car("Land Rover", "Range Rover", 2024);
//4.Call the start method on the instance of the Car class to verify that it logs the appropriate message to the console.
mycar.start();
console.log(`${mycar.make} , ${mycar.model} , ${mycar.year}`);
//5.Finally, compile your TypeScript code into JavaScript and run it to ensure everything works as expected.
//npm run watch
//npm run dev
