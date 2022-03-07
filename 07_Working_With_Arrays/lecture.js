'use-strict';

const arr = ['a', 'b', 'c', 'd', 'e', 'f'];

//SLICE: do NOT change orryginal array
console.log(arr.slice(2,4));
console.log(arr.slice(-2)); //get last elements
console.log(...arr); //Create a copy

//SPLICE: Change original array
// console.log(arr.slice(3)); //Remove First 3 elements
arr.splice(-1); //Remove last element

//REVERSE
arr.reverse();

//CONCAT (does NOT change original arrays)
const arr2 = ['2', 's3', '123'];
const newArr = arr.concat(arr2);

//JOIN
const joinArr = arr2.join('---'); //Return String

// AT arr[0] is same as arr.at(0)


// INCUDES, INDEXOF, PUSH, SHIFT



