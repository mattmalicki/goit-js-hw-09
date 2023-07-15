import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

// variables
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};
const inputDate = document.querySelector('input#datetime-picker');
const startBttn = document.querySelector('button[data-start]');
const daysMarkup = document.querySelector('[data-days]');
const hoursMarkup = document.querySelector('[data-hours]');
const minutesMarkup = document.querySelector('[data-minutes]');
const secondsMarkup = document.querySelector('[data-seconds]');
let msDate = 0;
let intervals = 0;
const disable = name => {
  name.disabled = true;
};
const enable = name => {
  name.disabled = false;
};

// button actions
startBttn.disabled = true;
startBttn.addEventListener('click', () => {
  disable(startBttn);
  disable(inputDate);
  intervals = setInterval(() => {
    countdown(convertMs(msDate));
    msDate -= 1000;
    msDate <= 0 ? endCountdown() : '';
  }, 1000);
});

flatpickr(inputDate, {
  ...options,
  onClose: function (selectedDates) {
    const currentDate = new Date();
    selectedDates[0] < currentDate
      ? incorrectDate()
      : correctDate(selectedDates[0].getTime(), currentDate.getTime());
  },
  onChange: function (selectedDates) {
    const currentDate = new Date();
    selectedDates[0] < currentDate ? disable(startBttn) : enable(startBttn);
  },
});

function incorrectDate() {
  Notify.failure('Please choose a date in the future');
}

function correctDate(selectedDate, currentDate) {
  msDate = selectedDate - currentDate;
}

function addLeadingZero(value) {
  return value < 10 ? value.toString().padStart(2, '0') : value.toString();
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function countdown(obj) {
  daysMarkup.textContent = addLeadingZero(obj.days);
  hoursMarkup.textContent = addLeadingZero(obj.hours);
  minutesMarkup.textContent = addLeadingZero(obj.minutes);
  secondsMarkup.textContent = addLeadingZero(obj.seconds);
}

function endCountdown() {
  enable(inputDate);
  clearInterval(intervals);
}
