function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.querySelector("body");
const colorEl = document.querySelector(".color");
const colorChangeEl = document.querySelector(".change-color");

colorChangeEl.addEventListener("click", onColorChange);

function onColorChange(event) {
  const color = getRandomHexColor();
  bodyEl.style.backgroundColor = color;
  colorEl.textContent = color;
}
