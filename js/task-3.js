const spanEl = document.querySelector('#name-output');
const inputEl = document.querySelector('#name-input');

inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
  const inputText = event.currentTarget.value.trim();
  spanEl.textContent = inputText ? inputText : 'Anonymous';
}
