function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

function createBoxes(amount) {
  const elements = [];
  for (let i = 0; i < amount; i += 1) {
    const element = document.createElement('div');
    element.style.width = width + 'px';
    width += 10;
    element.style.height = height + 'px';
    height += 10;
    element.style.backgroundColor = getRandomHexColor();
    elements.push(element);
  };
  document.querySelector('#boxes').append(...elements)
};

let width = 30;
let height = 30;

const createAmount = () => {
  createBoxes(document.querySelector('input').value);
};

const destroy = () => {
  document.querySelector('#boxes').innerHTML = '';
  width = 30;
  height = 30;
  document.querySelector('input').value = undefined;
};

const buttonCreate = document.querySelector("[data-create]");
buttonCreate.addEventListener('click', createAmount);

const buttonDestroy = document.querySelector("[data-destroy]");
buttonDestroy.addEventListener('click', destroy);
