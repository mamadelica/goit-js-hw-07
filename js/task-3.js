const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", () => {
  const trimedValue = inputEl.value.trim();

  if (trimedValue === "") {
    outputEl.textContent = "Anonymous";
  } else {
    outputEl.textContent = trimedValue;
  }
});
