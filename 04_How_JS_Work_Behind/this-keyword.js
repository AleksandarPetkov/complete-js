'use strict';
//THIS keyword is dinamic and its depent how function is called
//Using this in global. Return window object
console.log(this);

//Using this in Base function . Will be undefined becouse of strict mode. Without strict mode will return window object
const calcAge = function (birthday) {
  return 2022 - birthday;
  console.log(this);
};
calcAge(1991);

//Using this in Arrow function . Will be window becouse arrow function get closest content scope, using (lexical this keyword)
const calcAgeArrow = birthday => {
  return 2022 - birthday;
  console.log(this);
};
calcAge(1991);

//Using this in Object. Returns car obect. Car is owner of the method
const car1 = {
  brand: 'Mercedes',
  year: 1999,
  calcAge: function caclucateAge() {
    console.log(this);
    console.log(2022 - this.year);
  },
};
car1.calcAge();

//Using Other Object and Method borrowing
const car2 = {
  year: 2010,
};
car2.calcAge = car1.calcAge; //Method borrowing
console.log(car2.calcAge()); // Work okay becouse car2 colling the method!

const newCar = car1.calcAge; // We COPY function from car1
console.log(newCar.calcAge()); // Will return undefined becouse is not attached to object
