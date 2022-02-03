const refsInputNumber = document.querySelector('#validation-input');

refsInputNumber.addEventListener("blur", () => {

   if (refsInputNumber.value.length === Number(refsInputNumber.dataset.length)) {
        refsInputNumber.classList.add('valid');
        refsInputNumber.classList.remove('invalid');
    } else {
     refsInputNumber.classList.add('invalid');
     refsInputNumber.classList.remove('valid');
    }

});




