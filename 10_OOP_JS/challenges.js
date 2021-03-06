/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.
*/

const Car = function(speed){
    this.speed = speed;
}

Car.prototype.accelerate = function(){
    this.speed += 10;
    console.log(this.speed);
}

Car.prototype.break = function(){
    this.speed -= 5;
    console.log(this.speed);
}

const BMW = new Car(220);
const Mercedes = new Car(330);

BMW.accelerate();
BMW.accelerate();
BMW.accelerate();
BMW.break();
BMW.break();

console.log(Mercedes.__proto__)
