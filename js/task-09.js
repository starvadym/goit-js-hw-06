function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const refBtn = document.querySelector('.change-color');
const refSpan = document.querySelector('.color');
const body = document.body;

refBtn.addEventListener('click', () => {
  body.style.backgroundColor = getRandomHexColor();
  refSpan.textContent = body.style.backgroundColor;
})
