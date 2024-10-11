const openModalBtn = document.querySelector('[data-action="open-modal"]');
const closeModalBtn = document.querySelector('[data-action="close-modal"]');
const backdrop = document.querySelector('.js-backdrop');

openModalBtn.addEventListener('click', () => {
  document.body.classList.add('show-modal');
});

closeModalBtn.addEventListener('click', () => {
  document.body.classList.remove('show-modal');
});

backdrop.addEventListener('click', (event) => {
    if (event.target === backdrop) {
      document.body.classList.remove('show-modal');
    }
});

const form = document.querySelector('form');
const radios = form.elements.color;

form.addEventListener('change', (event) => {
  document.body.style.backgroundColor = event.target.value;
});

const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameInput.addEventListener('input', () => {
  nameOutput.textContent = nameInput.value.trim() || 'незнайомець';
});

const validationInput = document.getElementById('validation-input');
const requiredLength = parseInt(validationInput.dataset.length, 10);

validationInput.addEventListener('blur', () => {
  if (validationInput.value.length === requiredLength) {
    validationInput.classList.add('valid');
    validationInput.classList.remove('invalid');
  } else {
    validationInput.classList.add('invalid');
    validationInput.classList.remove('valid');
  }
});

const fontSizeControl = document.getElementById('font-size-control');
const textSpan = document.getElementById('text');

fontSizeControl.addEventListener('input', () => {
  textSpan.style.fontSize = `${fontSizeControl.value}px`;
});
