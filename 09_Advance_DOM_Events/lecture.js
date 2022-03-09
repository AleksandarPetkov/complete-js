//////////////////////////// SELECTING CREATING, DELETING ////////////////////////////
const header = document.querySelector('.header');

//Get all buttons. Return HtmlCollection (updates automatically)
const allButons = document.getElementsByTagName('button');

//Creating inserting elements
// 1) Element.insertAdjacentHTML() very usefill (In Bank app 'working with arrays section')

// 2) creating el programmatically and insert it (apend, prepend,before,after)
const message = document.createElement('div');
message.classList.add('cookie-message');
message.textContent ='We use cookies for improvments';
// message.innerHTML
header.prepend(message);
// header.append(message);
// header.before(message);
// header.after(message);

// 3) Styles .style work only for inlane style css
message.style.backgroundColor = '#37383d';
// message.width = 120
getComputedStyle(message).color;

//Classes
message.classList.add('');
message.classList.remove('');
message.classList.toggle('');
message.classList.contains('');

// EVENTS Bubbling / Capturing