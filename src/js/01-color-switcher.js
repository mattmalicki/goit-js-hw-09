const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
let intervals = null;

const startClick = () => {
  startBtn.setAttribute('disabled', '');
  intervals = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
};

startBtn.addEventListener('click', startClick);

stopBtn.addEventListener('click', () => {
  clearInterval(intervals);
  startBtn.removeAttribute('disabled');
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
