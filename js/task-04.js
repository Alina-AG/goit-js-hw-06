// let counterValue = 0;

// const increment = () => {
//     counterValue += 1;
//     buttonIncr.previousElementSibling.textContent = counterValue;
// };

// const decrement = () => {
//     counterValue -= 1;
//     buttonDecr.nextElementSibling.textContent = counterValue;
// }

// const buttonIncr = document.querySelector('[data-action="increment"]');
// buttonIncr.addEventListener('click', increment);

// const buttonDecr= document.querySelector('[data-action="decrement"]');
// buttonDecr.addEventListener('click', decrement);


// let counterValue = 0;

// const handler = () => {
//     if (event.currentTarget.dataset.action === 'increment') {
//         counterValue += 1;
//         buttonIncr.previousElementSibling.textContent = counterValue;
//         return;
//     } 
//         counterValue -= 1;
//         buttonDecr.nextElementSibling.textContent = counterValue;
    
// }

//  const buttonIncr = document.querySelector('[data-action="increment"]');
// buttonIncr.addEventListener('click', handler);

// const buttonDecr= document.querySelector('[data-action="decrement"]');
// buttonDecr.addEventListener('click', handler);

let counterValue = 0;
const counter = document.querySelector('#value');

const handler = () => {
    event.currentTarget.dataset.action === 'increment' ? counterValue += 1 : counterValue -= 1
    counter.textContent = counterValue;
}

const buttonIncr = document.querySelector('[data-action="increment"]');
buttonIncr.addEventListener('click', handler);

const buttonDecr= document.querySelector('[data-action="decrement"]');
buttonDecr.addEventListener('click', handler);