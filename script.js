"use strict";

// checking generated random number to player's choice

// random number generator for the guess field
const number = Math.trunc(Math.random() * 20) + 1;
// document.querySelector(".number").textContent = number;

// the score bord
let score = 20;
let highScore = 0;

// reset button
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  const number = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".number").textContent = "??";
  document.querySelector(".message").textContent = "Start guessing";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".guess").value = 0;
  document.querySelector('.score').textContent = score;

});


// compare the check inpute to the guess field when button clicked
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "no number";
  } else if (guess === number) {
    document.querySelector(".message").textContent = "number is correct!!!!";
    document.querySelector(".number").textContent = number;

    // when win happens style
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "60rem";
    // high score
    if(highScore < score){
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess > number) {
    if (score > 1) {
      document.querySelector(".message").textContent = "too high";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "you lost baby";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < number) {
    if (score > 1) {
      document.querySelector(".message").textContent = "too low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "you lost baby";
      document.querySelector(".score").textContent = 0;
    }
  }
});
