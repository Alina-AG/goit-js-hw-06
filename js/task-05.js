const inputValue = document.querySelector('#name-input');
const spanValue = document.querySelector('#name-output');

const handler = () => inputValue.value.length ? spanValue.textContent = inputValue.value : spanValue.textContent = "Anonymous";

inputValue.addEventListener('input', handler);