const mainListEl = document.querySelector("#categories");

console.log("Number of categories: " + mainListEl.children.length);

const headerEl = document.querySelectorAll(".item h2");

headerEl.forEach((element) => {
  console.log(`Category: ${element.textContent}`);
  console.log(`Elements: ${element.nextElementSibling.children.length}`);
});
