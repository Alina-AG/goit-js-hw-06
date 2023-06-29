const formElem = document.querySelector('.login-form');
const userData = { };

const formSubmit = () => {
    event.preventDefault();
    const { elements: { email, password } } = event.currentTarget;
    if (email.value && password.value) {
        userData.email = email.value;
        userData.password = password.value;
        console.log(userData);
        console.log(`E-mail: ${email.value}\nPassword: ${password.value}`);
        formElem.reset();
    } else {
        alert("All fields must be filled!")
    }
}
    
formElem.addEventListener('submit', formSubmit);
