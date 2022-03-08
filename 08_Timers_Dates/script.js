'use-strict';

// Create a date
const future = new Date();
console.log(future.getHours());
console.log(future.getFullYear());
console.log(future.getDay());
console.log(future.getMonth());

//Format date
console.log(new Intl.DateTimeFormat('en-GB').format(future));

//Timers
//setTimeOut() : run just once after defined time. Expect callback fun and time in milliseconds
//Main thread continue execution after setTimeout (Asynchromous)
setTimeout(() => console.log('Here is your pizza'), 2000);

//setInterval() : keep running until we stop it
setInterval(() => console.log(new Date()), 1000);
