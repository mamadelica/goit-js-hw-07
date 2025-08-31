function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function handlerBtnClick(event) {
  spanTextEl.textContent = getRandomHexColor();
  bodyEl.style.backgroundColor = spanTextEl.textContent;
}

const changeColBtn = document.querySelector(".change-color");
const bodyEl = document.querySelector("body");
const spanTextEl = document.querySelector(".widget .color");

changeColBtn.addEventListener("click", handlerBtnClick);
