const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// Ссылка на исходный список
const list = document.querySelector('#ingredients');

// Создаем виртуально каждый элемент списка li

const ingreds = ingredients.map(ingredient => {
const liRef = document.createElement('li');

// Присваивание значения класса

  liRef.classList.add('item');

// Название ингредиента как текстовое содержимое li

  liRef.textContent = ingredient;
  return liRef;
});
// Вставка элементов li внутрь списка ul
list.append(...ingreds);
document.body.prepend(list);