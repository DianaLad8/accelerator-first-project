const form = document.querySelector('.form');
const formField = form.querySelectorAll('.form__field');
const formSubmit = form.querySelector('.form__submit');

const delLabel = () => {
  formField.forEach((input) => {
    input.addEventListener('input', () => {
      const formLabel = input.nextElementSibling;
      const classError = input.closest('div');

      formLabel.style.display = 'none';
      if (classError.classList.contains('is-error')) {
        classError.classList.remove('is-error');
      }
    });
  });
};

const isValidForm = () => {
  formSubmit.addEventListener('click', () => {
    formField.forEach((input) => {
      const isValidInput = input.checkValidity();
      const classError = input.closest('div');
      if (!isValidInput) {
        classError.classList.add('is-error');
      } else {
        classError.classList.remove('is-error');
      }
    });
  });
};

delLabel();
isValidForm();
