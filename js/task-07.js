const rangeElem = document.querySelector('#font-size-control');
const spanElem = document.querySelector('#text')

const handler = () => spanElem.style.fontSize = rangeElem.value+'px';

rangeElem.addEventListener('input', handler);