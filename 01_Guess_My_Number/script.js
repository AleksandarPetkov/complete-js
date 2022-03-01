'use strict';

let secretNumber = getSercedNumber();
let score = 20;
let highScore = 0;

function getSercedNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

const formatNumber = function (width) {
  document.querySelector('.number').style.width = width;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //Using falsie value
  if (!guess) {
    displayMessage('Not a number!');
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';

    formatNumber('30rem');
    displayNumber(secretNumber);

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too High!' : 'To Low!');

      score--;
      displayScore(score);
    } else {
      displayMessage('game Over!');
      displayScore(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = getSercedNumber();
  score = 20;
  displayScore(score);
  displayMessage('Start guessing...');
  displayNumber('?');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  formatNumber('15rem');
});

console.log(secretNumber);
