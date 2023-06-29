const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsItems = ingredients.map(ingredient => {
  const ingredientElem = document.createElement('li');
  ingredientElem.textContent = ingredient;
  ingredientElem.classList.add('item');
  return ingredientElem;
});

document.querySelector('#ingredients').append(...ingredientsItems)


 