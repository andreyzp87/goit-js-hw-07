const categoriesRoot = document.querySelector('#categories');
const categories = categoriesRoot.querySelectorAll('.item');
console.log(`Number of categories: ${categories.length}`);

categories.forEach(category => {
  const title = category.querySelector('h2').textContent;
  const elements = category.querySelectorAll('li');
  console.log(`Category: ${title}`);
  console.log(`Elements: ${elements.length}`);
});
