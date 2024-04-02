const MESSAGE_ERROR_NAME = 'только буквы';
const MESSAGE_ERROR_TEL = 'только цифры';
const MESSAGE_REQUIRED = 'Поле обязательно для ввода';

const form = document.querySelector('form');
const formSubmit = form.querySelector('.form__submit');
const nameForm = form.querySelector('#name');
const telForm = form.querySelector('#tel');
const NAME_PROPERTY = /^[a-zа-яё\s]{0,}$/i;
const TEL_PROPERTY = /^[0-9\s]{0,}$/;

function testedValid (input, property, message) {
  input.addEventListener('input', () => {

    const isValid = property.test(input.value);
    const classError = input.closest('div');
    const tagError = classError.querySelector('span');

    if (!isValid) {
      tagError.textContent = message;
      classError.classList.add('is-invalid');
      formSubmit.disabled = true;
    } else if (input.value.length <= 0) {
      tagError.textContent = MESSAGE_REQUIRED;
      formSubmit.disabled = true;
    } else {
      tagError.textContent = '';
      classError.classList.remove('is-invalid');
      formSubmit.disabled = false;
    }
  });
}

const isValidTel = testedValid(telForm, TEL_PROPERTY, MESSAGE_ERROR_TEL);

const isValidName = testedValid(nameForm, NAME_PROPERTY, MESSAGE_ERROR_NAME);


export {isValidName, isValidTel};
