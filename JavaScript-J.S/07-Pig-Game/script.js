"use strict";

const player1 = document.querySelector(".player--0");
const player2 = document.querySelector(".player--1");
const scorePlayer1 = document.querySelector("#score--0");
const scorePlayer2 = document.getElementById("score--1"); // Supposed to be more fast than querySelector.
const diceElement = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const currentScore1 = document.getElementById("current--0");
const currentScore2 = document.getElementById("current--1");

let scores, currentScore, activePlayer, playing;
// Starting conditions
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  scorePlayer1.textContent = 0;
  scorePlayer2.textContent = 0;
  currentScore1.textContent = 0;
  currentScore2.textContent = 0;

  diceElement.classList.add("hidden");
  player1.classList.add("player--active");
  player1.classList.remove("player--winner");
  player2.classList.remove("player--winner");
  player2.classList.remove("player--active");
};

init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  player1.classList.toggle("player--active"); // Add class if not present, remove if present
  player2.classList.toggle("player--active"); // Add class if not present, remove if present
  currentScore = 0;
};
// Rolling dice function functionality
btnRoll.addEventListener("click", function () {
  if (playing) {
    // 1. Random number
    const diceNumber = Math.trunc(Math.random() * 6) + 1;

    // 2. Display dice
    diceElement.classList.remove("hidden");
    diceElement.src = `dice-${diceNumber}.png`;

    // 3. Check for rolled 1
    if (diceNumber !== 1) {
      // Add dice to current score
      currentScore += diceNumber;
      document.getElementById(`current--${activePlayer}`).textContent = currentScore; // prettier-ignore
    } else {
      // Switch player
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer] // prettier-ignore

    // 2. Check if player's score is over 100
    if (scores[activePlayer] >= 10) {
      // Finish the Game
      playing = false;
      diceElement.classList.add("hidden");
      document.querySelector(`.player--${activePlayer}`).classList.add("player--winner"); // prettier-ignore
      document.querySelector(`.player--${activePlayer}`).classList.remove("player--active"); // prettier-ignore
    } else {
      // Switch player
      switchPlayer();
    }
  }
});

btnNew.addEventListener("click", init);
