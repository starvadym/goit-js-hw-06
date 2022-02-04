const refsform = document.querySelector('.login-form');

const emailInput = document.querySelector('input[name="email"]');
const passwordInput = document.querySelector('input[name="password"]');


const onSubmit = e => {
    e.preventDefault();

    if ((!emailInput.value.trim()) || (!passwordInput.value.trim())) {
        alert('Enter some text!');
        return;
    }

    addObject(emailInput.value, passwordInput.value);
    // console.log(e.currentTarget.elements.email.name, e.currentTarget.elements.password.name);
    // console.log(emailInput.name, passwordInput.name);

    refsform.reset();
};


function addObject(email, password) {
    const newObj = {};
    newObj[emailInput.name] = `${emailInput.value}`;
    newObj[passwordInput.name] = `${passwordInput.value}`;

    console.log(newObj);
}
refsform.addEventListener('submit', onSubmit);
