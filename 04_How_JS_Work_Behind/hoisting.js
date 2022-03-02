//Hoisting and TDZ (Temporal Dead Zone) in practice
'use strict';

//Hoisting Variables
// console.log(varVariable);
// console.log(letVariable);
// console.log(constVariable);

var varVariable = 'test';
let letVariable = 'test';
const constVariable = 'test';

//Hoisting Functions
// console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

//Practical Example: productCount is undefined becouse of var! Variable/function declared as VAR will create property in window object
console.log(productsCount);
if (!productsCount) {
  deleteProducts();
}

var productsCount = 10;

function deleteProducts() {
  console.log('All products deleted!');
}
