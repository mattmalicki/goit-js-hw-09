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

flatpickr(inputDate, {
  options,
  onClose: function (selectedDates) {
    const currentDate = new Date();
    selectedDates[0] < currentDate ? incorrectDate() : correctDate();
  },
});

function incorrectDate() {
  startBttn.setAttribute('disabled', '');
  window.alert('Please choose date in the future!');
}

function correctDate() {
  startBttn.removeAttribute('disabled');
}
