const inputValue = document.querySelector("#validation-input");

const handler = () => {
    if (inputValue.value.length == inputValue.dataset.length) {
        if (inputValue.classList.contains('invalid')) {
            inputValue.classList.replace('invalid', 'valid');
        } else {
            inputValue.classList.add('valid');
        }
    } else {
       if (inputValue.classList.contains('valid')) {
            inputValue.classList.replace('valid', 'invalid');
        } else {
            inputValue.classList.add('invalid');
        } 
    };
};

inputValue.addEventListener('blur', handler);