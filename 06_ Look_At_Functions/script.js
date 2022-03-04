'use strict';
// *** Passing arguments: value vs reference
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

// Functions Accepting Callback Functions
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
