function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refDiv = document.querySelector('#boxes');
const refInput = document.querySelector('input');

const refBtnCreate = document.querySelector('button[data-create]');
const refBtnDestroy = document.querySelector('button[data-destroy]');


const createBoxes = (amount) => {
  for (let i = 1; i <= amount; i += 1){
  const createDiv = document.createElement('div');
  createDiv.classList.add('new');
  createDiv.style.width = `${(i*10 + 30)}px`;
  createDiv.style.height = `${(i*10 + 30)}px`;
  createDiv.style.backgroundColor = getRandomHexColor();

  refDiv.append(createDiv);
  }
}

refBtnCreate.addEventListener('click', () => {
    createBoxes(refInput.value);
});

refBtnDestroy.addEventListener('click', () => {
  destroyBoxes(refInput.value);
});

const destroyBoxes = (amount) => {
  for (let i = 1; i <= amount; i += 1) {
    const deleteDiv = document.querySelector('.new');
    deleteDiv.remove();
  }
}