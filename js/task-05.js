const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener('input', (event) => {
    event.preventDefault();
    if (!event.currentTarget.value) {
        nameOutput.textContent = 'Anonymous';
        return;
    }
    nameOutput.textContent = event.currentTarget.value;
});

