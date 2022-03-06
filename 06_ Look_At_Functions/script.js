'use strict';
// *** Passing arguments: value VS reference
const flight = 'GT0123';
const employee = {
  name: 'Alex',
  passport: 982931414412,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'XXXGT0123XXX';
  passenger.name = `Mr. ${passenger.name}`;

  if (passenger.passport === 982931414412) {
    alert('Check In!');
  } else {
    alert('Wrong Passport!');
  }
};

checkIn(flight, employee);
console.log(flight, employee.name);

// ** First Class Funct is a concept (FUNCTIONS ARE JUST VALUES)
// ** Higher Order Functions (Fiunction recieve other function as argument or return function)

// ** Functions Accepting Callback Functions
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function (second argument is a FUNCTION)
// The function which we passed as argument is a CALL-BACK function (calling then later), using call backs our code is more ABSTRACT
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`); //Invoke the function

  console.log(`Transformed by: ${fn.name}`); //Function have a properties line 'name'
};
transformer('JavaScript is the best!', oneWord);
transformer('JavaScript is the best!', upperFirstWord);

// ** RETURN FUNCTION
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

//Arrow Representation (One Arrow Function Return other Arrow Function)
const greetArrow = greeting => name => console.log(`${greeting} ${name}`);

const greeterHello = greet('Hello'); // greeterHello is a function
greeterHello('Alex');
greet('Hey')('Alex'); // Other syntax

// *** The call and apply Methods *** //////////////////
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

//Stored the fucntion from lufthansa to book
const book = lufthansa.book;

// Does NOT work !!! Uncaught TypeError: Cannot read properties of undefined !!!
// book(23, 'Sarah Williams'); book() is a separate from lufthansa.book() function and this keyword point to undefined

// Call method (We need to call JS manually what this keyword hould look like)
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');

// Apply method: Same as call but arguments shoud be array
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

// *** Bind Method - Just like 'call' method bind also allow us to manually set THIS KEYWORD for any function call (return new function where this keyword is bound)
// book.call(eurowings, 23, 'Sarah Williams');

//Define this keyword with bind()
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas Schmedtmann');
bookEW23('Martha Cooper');

// *** Bind Method With Event Listeners !!!!
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};
// lufthansa.buyPlane();

document
  .querySelector('.buy') //Need to use B
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));

// *** Immediately invoked Functions Expression (IIFE) (Only executed once) Wrapping in ( ) and Hidding variables
const runOnce = function () {
  console.log('This will never run again');
};
runOnce();

// IIFE
(function () {
  console.log('This will never run again');
  const isPrivate = 23;
})();


// *** Closures ************* /////////////////////////////////////////////
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);


