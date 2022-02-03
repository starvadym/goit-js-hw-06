function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const refBtnCreate = document.querySelector('button[data-create]');
const refBtnDestroy = document.querySelector('button[data-destroy]');