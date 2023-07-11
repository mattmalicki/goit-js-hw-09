import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

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
startBttn.setAttribute('disabled', '');
let msDate = 0;
let intervals = 0;
startBttn.addEventListener('click', () => {
  intervals = setInterval(() => {
    countdown(convertMs(msDate));
    msDate -= 1000;
  }, 1000);
});

flatpickr(inputDate, {
  ...options,
  onClose: function (selectedDates) {
    const currentDate = new Date();
    selectedDates[0] < currentDate
      ? incorrectDate()
      : correctDate(selectedDates[0].getTime, currentDate.getTime);
  },
});

const daysMarkup = document.querySelector('[data-days]');
const hoursMarkup = document.querySelector('[data-hours]');
const minutesMarkup = document.querySelector('[data-minutes]');
const secondsMarkup = document.querySelector('[data-seconds]');

function incorrectDate() {
  startBttn.setAttribute('disabled', '');
  window.alert('Please choose date in the future!');
}

function correctDate(selectedDate, currentDate) {
  startBttn.removeAttribute('disabled');
  msDate = selectedDate - currentDate;
}

function addLeadingZero(value) {
  value < 10 ? value.padStart('0') : '';
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
  daysMarkup.value = addLeadingZero(obj.days);
  hoursMarkup.value = addLeadingZero(obj.hours);
  minutesMarkup.value = addLeadingZero(obj.minutes);
  secondsMarkup.value = addLeadingZero(obj.seconds);
}
