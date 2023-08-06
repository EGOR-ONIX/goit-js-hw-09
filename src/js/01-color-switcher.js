const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
  body: document.body,
};
let intervalId;

refs.startBtn.addEventListener('click', startGenerationColor);
refs.stopBtn.addEventListener('click', stopGenerationColor);

function startGenerationColor(event) {
  event.currentTarget.setAttribute('disabled', true);

  let color = getRandomHexColor();
  refs.body.style.backgroundColor = color;

  intervalId = setInterval(() => {
    color = getRandomHexColor();
    refs.body.style.backgroundColor = color;
  }, 1000);
}

function stopGenerationColor() {
  clearInterval(intervalId);
  refs.startBtn.removeAttribute('disabled');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
