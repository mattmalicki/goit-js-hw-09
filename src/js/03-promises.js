import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');
const delayInput = document.querySelector('[name="delay"]');
const stepInput = document.querySelector('[name="step"]');
const amountInput = document.querySelector('[name="amount"]');
const startBttn = document.querySelector('button');
const disable = name => {
  name.disabled = true;
};
const enable = name => {
  name.disabled = false;
};

form.addEventListener('submit', onSubmit);

function fulfilled(obj) {
  Notify.success(`Fulfilled promise ${obj.position} in ${obj.delay}ms`);
}
function rejected(obj) {
  Notify.failure(`Rejected promise ${obj.position} in ${obj.delay}ms`);
}

function onSubmit(event) {
  event.preventDefault();
  disable(startBttn);
  const step = parseInt(stepInput.value);
  let delay = parseInt(delayInput.value);
  const amount = parseInt(amountInput.value);
  const bttnTimout = step * (amount - 1) + delay;
  for (let i = 0; amount > i; i++) {
    createPromise(i + 1, delay)
      .then(obj => {
        return fulfilled(obj);
      })
      .catch(obj => {
        return rejected(obj);
      });
    delay += step;
  }
  setTimeout(() => {
    enable(startBttn);
  }, bttnTimout);
}

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
  return promise;
}
