function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesEl = document.querySelector("#boxes");
const inputEl = document.querySelector("input");

createBtn.addEventListener("click", onButtonCick);
destroyBtn.addEventListener("click", destroyBoxes);

function onButtonCick() {
  if (inputEl.value < 1 || inputEl.value > 100) {
    alert("A number should be between 1 and 100");
    return;
  }

  createBoxes(inputEl.value);
}

function createBoxes(amount) {
  destroyBoxes();

  let size = 30;
  let boxesHtml = "";

  for (let i = 0; i < amount; i += 1) {
    boxesHtml += `<div style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}"></div>`;
    size += 10;
  }

  boxesEl.insertAdjacentHTML("beforeend", boxesHtml);
  inputEl.value = "";
}

function destroyBoxes() {
  boxesEl.innerHTML = "";
}
