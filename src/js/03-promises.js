import { Notify } from 'notiflix/build/notiflix-notify-aio';

const delay = document.querySelector('input[name="delay"]');
const step = document.querySelector('input[name="delay"]');
const amount = document.querySelector('input[name="amount"]');
const startBttn = document.querySelector('button');
const fulfilled = Notify.success(
  `Fulfilled promise ${this.position} in ${this.delay}ms`
);
const rejected = Notify.failure(
  `Rejected promise ${this.position} in ${this.delay}ms`
);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    fulfilled;
  } else {
    rejected;
  }
}
