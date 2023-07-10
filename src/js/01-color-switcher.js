const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
let intervals = null;

startBtn.addEventListener('click', () => {
  intervals = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
    startBtn.setAttribute('disabled', '');
  }, 1000);
});

stopBtn.addEventListener('click', () => {
  clearInterval(intervals);
  startBtn.removeAttribute('disabled');
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
