'use strict';
// Destructoring is machanism that breaks complex data structures to smaller data like a variables. Usefull in API data manipulations

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const restaurant = {
  restaurantName: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterMenuIndex, mainManuIndex) {
    return [this.starterMenu[starterMenuIndex], this.mainMenu[mainManuIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// ******* Using Destructoring Array. Using []  **************
const arr = [1, 2, 3, 4];
const [a, b, c] = arr; // Declare the three variables in one place
const [d, , , e] = arr; // Scip elements
const [first, second, , fourth] = restaurant.categories; //Gertting propeties by index
let [start, main] = restaurant.categories;

console.log(a, b, c);
console.log(d, e);
console.log('Categories: ', first, second, fourth);

//Can easely perform Switch
[start, main] = [main, start];
console.log('Switch: ', start, main);

//Return two or more values from a function
console.log(restaurant.order(2, 2));
const [starterMenuContent, mainMenuContent] = restaurant.order(2, 2);
console.log(starterMenuContent, mainMenuContent);

// ******* Using Destructoring Objects using {} **************
const { restaurantName, openingHours, categories } = restaurant; //Gertting propeties by name
console.log(restaurantName, openingHours, categories);

//Changing variable names
const {
  restaurantName: currentName,
  openingHours: hoursWorking,
  categories: tags,
} = restaurant;
console.log(currentName, hoursWorking, tags);

//Destructoring Nested Objects
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);
