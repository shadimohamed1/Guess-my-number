`use strict`;
// const should be initialized in the same line
let answer = Math.trunc(Math.random() * 20) + 1;
let guess;
let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  guess = Number(document.querySelector(".sc").value);

  if (guess === answer) {
    document.querySelector(".question").textContent = answer;
    document.querySelector(".top").textContent = "Congratulations";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".question").style.width = "30rem";
    document.querySelector(".question").style.height = "10rem";
    if (score >= highscore) {
      highscore = score;
      document.querySelector(".but").textContent = `Highscore : ${highscore}`;
    }
    score = 20;
  } else if (guess > answer) {
    if (score > 1) {
      document.querySelector(".top").textContent =
        "Your guess is larger than the seceret number";
      score--;
      document.querySelector(".score-span").textContent = score;
    } else {
      document.querySelector(
        ".top"
      ).textContent = `You lose the game Press on again!`;
      document.querySelector(".score-span").textContent = 0;
    }
  } else if (guess < answer) {
    if (score > 1) {
      document.querySelector(".top").textContent =
        "Your guess is smaller than the seceret number";
      score--;
      document.querySelector(".score-span").textContent = score;
    } else {
      document.querySelector(
        ".top"
      ).textContent = `You lose the game Press on again!`;

      document.querySelector(".score-span").textContent = 0;
    }
  } else if (!guess) {
    document.querySelector(".top").textContent = "There is no guess!";
  }
});

document.querySelector(".again").addEventListener("click", function () {
  answer = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  document.querySelector(".sc").textContent = ` `;
  document.querySelector(".top").textContent = "Start guessing .. ";
  document.querySelector(".score-span").textContent = score;
  document.querySelector(".question").textContent = `?`;

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".question").style.width = "100px";
  document.querySelector(".question").style.height = "50px";
});
