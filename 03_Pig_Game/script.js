'use strict';

let firstPlayerScores = 0;
let secondPlayerScores = 0;
let currentScore = 0;
let activePlayer = 0;
let isGameActive = true;

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const diceEl = document.querySelector('.dice');
const btnNewEl = document.querySelector('.btn--new');
const btnRollEl = document.querySelector('.btn--roll');
const btnHoldEl = document.querySelector('.btn--hold');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

//Starting conditions
score0El.textContent = firstPlayerScores;
score1El.textContent = secondPlayerScores;
diceEl.classList.add('hidden');

function rollTheDice() {
  return Math.trunc(Math.random() * 6) + 1;
}

const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;

  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--active');

  //Changing active player
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--active');
  // Can be used alse toggle method for player--active logic
  // player0El.classList.toggle('player-active');
  // player1El.classList.toggle('player-active');
};

//Rolling the dice functionality
btnRollEl.addEventListener('click', function () {
  if (isGameActive) {
    let dice = rollTheDice();

    diceEl.src = `dice-${dice}.png`;
    diceEl.classList.remove('hidden');

    if (dice !== 1) {
      currentScore += dice;
      // if (activePlayer === 0) {
      //   current0El.textContent = currentScore;
      // } else {
      //   current1El.textContent = currentScore;
      // }
      // IF ELSE statement can be replasing smarter with:
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHoldEl.addEventListener('click', function () {
  if (isGameActive) {
    if (activePlayer === 0) {
      firstPlayerScores += currentScore;
      score0El.textContent = firstPlayerScores;
      checkForWinner(0, firstPlayerScores);
    } else if (activePlayer === 1) {
      secondPlayerScores += currentScore;
      score1El.textContent = secondPlayerScores;
      checkForWinner(1, secondPlayerScores);
    }
  }
});

btnNewEl.addEventListener('click', function () {
  location.reload();
  return false;
});

function checkForWinner(player, score) {
  if (score >= 100) {
    isGameActive = false;
    document
      .querySelector(`.player--${player}`)
      .classList.add('player--winner');
  } else {
    switchPlayer();
  }
}
