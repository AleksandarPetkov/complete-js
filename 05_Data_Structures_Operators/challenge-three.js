'use strict';
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      
firstName           
someVariable        
calculateAge        
delayedDeparture    
*/
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const splitedValues = text.split('\n');
  for (const value of splitedValues) {
    let trimValue = value.toLowerCase().trim();
    console.log(wordToCamelCase(trimValue));
  }
});

function wordToCamelCase(manipulateValue) {
  const wordsArr = manipulateValue.split('_');
  let correctWord = '';
  for (const [index, word] of wordsArr.entries()) {
    if ((index + 1) % 2 == 0) {
      correctWord += word.replace(word[0], word[0].toUpperCase());
    } else {
      correctWord += word;
    }
  }
  return correctWord;
}
