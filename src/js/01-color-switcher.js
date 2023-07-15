const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
let intervals = null;
const disable = name => {
  name.disabled = true;
};
const enable = name => {
  name.disabled = false;
};

const startClick = () => {
  disable(startBtn);
  intervals = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
};

startBtn.addEventListener('click', startClick);

stopBtn.addEventListener('click', () => {
  clearInterval(intervals);
  enable(startBtn);
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
