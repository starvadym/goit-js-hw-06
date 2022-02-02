const refsInputNumber = document.querySelector('#validation-input');

refsInputNumber.addEventListener("blur", () => {

   if (refsInputNumber.value.length === Number(refsInputNumber.dataset.length)) {
        refsInputNumber.classList.add('valid');
    } else {
     refsInputNumber.classList.add('invalid');
    }

});




