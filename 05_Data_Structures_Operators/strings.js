'use strict';

const airlane = 'TAG air Portugal';
//String Methods
console.log(airlane[2]);
console.log(airlane.length);
console.log(airlane.indexOf('r'));
console.log(airlane.lastIndexOf('r'));
console.log(airlane.indexOf('Portugal'));
//substring
console.log(airlane.slice(4));
console.log(airlane.slice(4, 10));
console.log(airlane.slice(0, airlane.lastIndexOf(' ')));
//Changing content
console.log(airlane.toUpperCase());
console.log(airlane.trim());
//Replacing
const priceLeva = '199,99 LEVA';
const priceEuro = priceLeva.replace(',', '.').replace('LEVA', '$');
console.log(priceEuro);
//Booleans
console.log(airlane.includes('TAG'));
console.log(airlane.startsWith('TAG'));
console.log(airlane.endsWith('TAG'));
//Split
const testString = 'Tell!Me!About!Yourself';
const splitedTestString = testString.split('!');
const [word1, word2] = splitedTestString;
//Joining
const joiningString = ['See ', word1, word2.toUpperCase()].join(' ');
//Padding
const message = 'Go to Gate 13';
console.log(message.padStart(20, '!'));
