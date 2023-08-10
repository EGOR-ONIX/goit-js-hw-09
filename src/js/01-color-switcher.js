const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
};

refs.stopBtn.setAttribute('disabled', true);
let intervalId;

refs.startBtn.addEventListener('click', startGenerationColor);
refs.stopBtn.addEventListener('click', stopGenerationColor);

function startGenerationColor(event) {
  event.currentTarget.setAttribute('disabled', true);
  refs.stopBtn.removeAttribute('disabled');

  setBodyBgColor(getRandomHexColor());

  intervalId = setInterval(() => {
    const color = getRandomHexColor();
    setBodyBgColor(color);
  }, 1000);
}

function stopGenerationColor() {
  clearInterval(intervalId);
  refs.startBtn.removeAttribute('disabled');
  refs.stopBtn.setAttribute('disabled', true);
}

function setBodyBgColor(color) {
  document.body.style.backgroundColor = String(color);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
