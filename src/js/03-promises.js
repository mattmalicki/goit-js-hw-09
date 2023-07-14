import { Notify } from 'notiflix/build/notiflix-notify-aio';

const delayInput = document.querySelector('[name="delay"]');
const stepInput = document.querySelector('[name="delay"]');
const amountInput = document.querySelector('[name="amount"]');
const startBttn = document.querySelector('button');
const fulfilled = Notify.success(
  `Fulfilled promise ${this.position} in ${this.delay}ms`
);
const rejected = Notify.failure(
  `Rejected promise ${this.position} in ${this.delay}ms`
);

startBttn.addEventListener('click', bttnClicked());

function bttnClicked(event) {
  event.preventDefault();
  const delay = delayInput.value;
  const step = stepInput.value;
  const amount = amountInput.value;
  for (let i = 1; amount >= i; i++) {
    createPromise(i, delay)
      .then(({ position, delay }) => {
        fulfilled;
      })
      .catch(({ position, delay }) => {
        rejected;
      });
  }
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
