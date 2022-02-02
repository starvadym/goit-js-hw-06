const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const spanRef = document.querySelector('#value');

let counterValue = 0;


decrementBtn.addEventListener('click', () => {
    counterValue-= 1;
    spanRef.textContent = `${counterValue}`
});
incrementBtn.addEventListener('click', () => {
    counterValue+= 1;
    spanRef.textContent = `${counterValue}`

});