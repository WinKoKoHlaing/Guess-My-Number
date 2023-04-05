'use strict';
// lesson - 73
// guess number 1

let luckyNumber = Math.trunc(Math.random() * 20) + 1;
console.log(luckyNumber);
const showMessage = message => {
  document.querySelector('.message').textContent = message;
};

let score = 10;
let highScore = 0;
document.querySelector('.score').textContent = score;

document.querySelector('.check').addEventListener('click', () => {
  const guessNumber = Number(document.querySelector('.guess').value);
  if (!guessNumber) {
    showMessage('No Number ......');
  } else if (guessNumber === luckyNumber) {
    showMessage('Correct Number ......');
    document.querySelector('body').style.background = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = luckyNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guessNumber !== luckyNumber) {
    if (score > 0) {
      showMessage(
        guessNumber > luckyNumber
          ? 'Too High Number ......'
          : 'To low Number .....'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      showMessage('You Lose Game Over ......');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', () => {
  showMessage('Start Guessing ......');
  document.querySelector('body').style.background = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  score = 10;
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  luckyNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(luckyNumber);
});
