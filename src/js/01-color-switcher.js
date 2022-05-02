const btnStartEl = document.querySelector('[data-start]');
console.log(btnStartEl);

const btnStopEl = document.querySelector('[data-stop]');
console.log(btnStopEl);

const bodyEl = document.querySelector('body');
console.log(bodyEl);

let timerId;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

btnStartEl.addEventListener('click', () => {
  timerId = setInterval(() => {
    bodyEl.style.backgroundColor = getRandomHexColor();
  }, 1000);
  btnStartEl.disabled = true;
  btnStopEl.disabled = false;
});

btnStopEl.addEventListener('click', () => {
  clearInterval(timerId);
  btnStartEl.disabled = false;
  btnStopEl.disabled = true;
});
