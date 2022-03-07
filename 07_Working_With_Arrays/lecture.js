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

//////////////////////////////////////////////////////////////////////////////////////////
// ************ DATA Transformation : MAP, Filter, Reduce  ************************

// 1) Map method - loop over the array and give us brand new array and will contain result of the callback function for each element

const levaToEuroRatio = 1.96;
const euro = [5, 11, 300, 100, 50, 1000];
                    //Invoke the CALL BACK function foreach element
const leva = euro.map(lev => lev * levaToEuroRatio); // (=> isEuql to RETURN)

// euro.map(function(mov) { Other way of implementation
//     return mov * levaToEuroRatio;
// })
console.log(leva);

// Compute fullName to comp 
const fullName = 'Aleksandar Petkov Petkov' // 
const comp = fullName.toLocaleLowerCase().split(' ').map(name => name.charAt(0))
.join(''); // Return array and join it as string
console.log(comp);

// 2) Filter Method
const bigEuro = euro.filter(euro => euro >= 100);
console.log(bigEuro);

// 3) Reduce Method : Resolve all elements in array to single value: accumulator like variable
const alleuro = euro.reduce(function(accumulator, cur, i , arr) { 
    console.log(`Iteration ${i} : Accumulator: ${accumulator}`);
    return accumulator + cur;
},0); // Set starting value for accumulator
console.log(alleuro);





