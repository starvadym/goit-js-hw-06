const refs = {
    form: document.querySelector('.login-form'),
    email: document.querySelector('input[name="email"]'),
    password: document.querySelector('input[name="password"]'),

};
    const refEmail = refs.form.elements.email;
    const refPassword = refs.form.elements.password;

const onSubmit = e => {
    e.preventDefault();

    if ((!refEmail.value.trim()) || (!refPassword.value.trim())) {
        alert('Enter some text!');
        return;
    }

    addObject(refEmail.value, refPassword.value);
    refs.form.reset();
};


function addObject(email, password) {
    const newObj = {};
    newObj.email = `${refEmail.value}`;
    newObj.password = `${refPassword.value}`;

    console.log(newObj);
}
refs.form.addEventListener('submit', onSubmit);
