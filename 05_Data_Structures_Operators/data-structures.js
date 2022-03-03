//Before ES6(EcmaScript) JS only have (objects, arrays)
//Two more datastructures are introduced Map, Set

//******** SET (collection of uniqe, unordered values) *********
const orderMenu = new Set(['Pizza', 'Pasta', 'Salat', 'Pizza', 'Pasta']);
console.log(orderMenu);

////******** MAP keys can have any types (obj,arr,number....) *********
const orderMap = new Map();
orderMap.set(1, 'Italia');
orderMap.set(document.querySelector('h1'), 'Heading');
//Other way of populating Map
const quizMap = new Map([
  ['question', 'Which is the best programming language?'],
  [1, 'java'],
  [2, 'C#'],
  [3, 'Java Script'],
  ['corrent', 3],
  [true, 'Correct!'],
]);
console.log(quizMap);
//Iterating Map
const entries = quizMap.entries();
const quezKeys = quizMap.keys();
const quezValues = quizMap.values();
//Using Destructuring [key/value]
for (const [key, value] of quizMap) {
  if (typeof key === 'number') {
    console.log(value);
  }
}
