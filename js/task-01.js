
const listRef = document.querySelector('#categories');
const itemRef = listRef.querySelectorAll('.item');

// Количество категорий в ul#categories, то есть элементов li.item

console.log(`Number of categories: ${itemRef.length}`);

for (let i = 0; i < itemRef.length; i += 1){
const textRef = listRef.children[i].querySelector('h2');
// Текст заголовка элемента (тега <h2>)

const text = textRef.textContent;
    console.log(`
Category: ${text}`);
// Количество элементов в категории

const liRefs = listRef.children[i].querySelectorAll('li')
console.log(`Elements: ${liRefs.length}`);
}




