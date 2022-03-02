'use strict';
//NEVER USE ARROW FUNCTION AS METHOS IF CONTAINS THIS KEYWORD
var firstName = 'Matilda';

const jonasObj = {
  firstName: 'Jonas',
  birthyear: 1991,
  calcAge: function caclucateAge() {
    console.log(this);
    console.log(2022 - this.year);
  },
  greet: () => {
    console.log(this);
    console.log(`Hello, My name is ${this.firstName}`);
  },
};
//BUG / ERROR Example:
//Using arrow function get CLOSEST PARENT content (window). Using var keyword we assign in window object variable firstName.
jonasObj.greet();
