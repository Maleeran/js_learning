'use strict';

/* console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🎉 Correct Number! ';
document.querySelector('.score').textContent = 20;
document.querySelector('.number').textContent = 13;

document.querySelector('.guess').value = 23;
*/

// 生成随机0-20的整数
const setMessage = message => {
  document.querySelector('.message').textContent = message;
};

const setScore = score => {
  document.querySelector('.score').textContent = score;
};

let secretNumber = Math.floor(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', () => {
  let guess = Number(document.querySelector('.guess').value);

  //   console.log(guess, typeof guess);

  // 错误提示
  if (guess < 1 || guess > 20) {
    setMessage('🚫 The number must 1 - 20!');
  } else if (!Number.isInteger(guess)) {
    setMessage('🚫 The number must be a Integer');
  } else if (!guess) {
    setMessage('🚫 No number!');
  }
  // 判断是否等于设定值
  else if (guess !== secretNumber) {
    if (score > 1) {
      setMessage(guess > secretNumber ? '🤯 Too High' : '😥 Too Small');
      score--;
      setScore(score);
    } else {
      setMessage('💔 You lost the game! ');
      setScore(0);
    }
  } else {
    setMessage('🎉 Correct Number! ');
    setScore(score);
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#1864ab';
    document.querySelector('.number').style.width = '30rem';
  }
});

// 点击 again 生成新的密码数
document.querySelector('.again').addEventListener('click', () => {
  secretNumber = Math.floor(Math.random() * 20) + 1;
  console.log(secretNumber);
  //   恢复原状
  score = 20;

  setScore(score);

  setMessage('Start guessing... ');

  document.querySelector('body').style.backgroundColor = ' #222';
  document.querySelector('.number').style.width = '15rem';

  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
