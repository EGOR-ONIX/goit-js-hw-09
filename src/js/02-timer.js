import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const refs = {
  input: document.getElementById('datetime-picker'),
  btn: document.querySelector('button[data-start'),
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
};

// Custom style start

const clockSpace = document.querySelector('.timer');
const fields = document.querySelectorAll('.field');

clockSpace.style.marginTop = '20px';
clockSpace.style.display = 'flex';
clockSpace.style.gap = '30px';

fields.forEach(element => {
  element.style.display = 'flex';
  element.style.flexDirection = 'column';
  element.style.alignItems = 'center';

  element.firstElementChild.style.fontSize = '40px';
  element.firstElementChild.style.lineHeight = '1';
  element.lastElementChild.style.textTransform = 'uppercase';
});

// Custom style end

flatpickr(refs.input, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= new Date()) {
      Notiflix.Notify.failure('Please choose a date in the future!');
    } else {
      refs.btn.disabled = false;
      Notiflix.Notify.success('Selected date is correct!');
    }
  },
});

refs.btn.disabled = true;
let timerId;

refs.btn.addEventListener('click', startTimer);

function startTimer() {
  refs.btn.disabled = true;
  refs.input.disabled = true;

  showTime(convertMs(new Date(refs.input.value) - Date.now()));

  timerId = setInterval(() => {
    const timeToFinish = new Date(refs.input.value) - Date.now();

    showTime(convertMs(timeToFinish));

    if (timeToFinish < 1000) {
      clearInterval(timerId);
      refs.btn.disabled = true;
      Notiflix.Notify.success('FINISH!');
    }
  }, 1000);
}

function showTime({ days, hours, minutes, seconds }) {
  refs.days.textContent = addLeadingZero(days);
  refs.hours.textContent = addLeadingZero(hours);
  refs.minutes.textContent = addLeadingZero(minutes);
  refs.seconds.textContent = addLeadingZero(seconds);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
