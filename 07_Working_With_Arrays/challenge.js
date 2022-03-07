'use-strict';
/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
*/

const juliaData = [3, 5, 2, 12, 7];
const kateData = [4, 1, 15, 8, 3];

const checkDogs = function (dogsJulia, dogsKate){
    const correctedDogsJulia = dogsJulia.slice(1,3);
    // const newArr = dogsJulia.slice(); Another implementation
    // newArr.splice(-2);
    // newArr.splice(0,1);
    const allDogs = correctedDogsJulia.concat(dogsKate);
    allDogs.forEach((dog, i) => {
        const dogStatus = dog >= 3 ? 'adult' : 'puppy';
        console.log(`Dog number ${i + 1} is an ${dogStatus}, and is ${dog} years old`)
    });
}

checkDogs(juliaData, kateData);