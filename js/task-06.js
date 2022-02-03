const refsInputNumber = document.querySelector('#validation-input');


refsInputNumber.addEventListener("blur", () => {
  const textInputData = Number(refsInputNumber.dataset.length);
   if (refsInputNumber.value.length === textInputData) {
       replaceClasses('valid', 'invalid');
       return;
   }
    replaceClasses('invalid', 'valid');

});

const replaceClasses = (classToAdd, classToRemove) => {
  refsInputNumber.classList.add(classToAdd);
  refsInputNumber.classList.remove(classToRemove);
}



