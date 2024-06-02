/* eslint-disable no-useless-concat */
const inputTels = document.querySelectorAll('input[type="tel"]');

const getInputNumbersValue = (input) => input.value.replace(/\D/g, '');


const onTelInput = (e) => {
  const input = e.target;
  const inputNubersValue = getInputNumbersValue(input);
  const firstNuber = +inputNubersValue[0];
  const firstNumberArray = [7, 8, 9];
  const selectionStart = input.selectionStart;
  let formattedInputValue = '';

  if (!inputNubersValue) {
    input.value = '';
  }
  if (input.value.length !== selectionStart) {
    if (e.data && /\D/g.test(e.data)) {
      input.value = inputNubersValue;
    }
    return;
  }
  if (firstNumberArray.includes(firstNuber)) {
    formattedInputValue = '+7' + ' ';

    if (inputNubersValue.length > 1) {
      formattedInputValue += `(${inputNubersValue.substring(1, 4)}`;
    }
    if (inputNubersValue.length >= 5) {
      formattedInputValue += `)${inputNubersValue.substring(4, 7)}`;
    }
    if (inputNubersValue.length >= 8) {
      formattedInputValue += `-${inputNubersValue.substring(7, 9)}`;
    }
    if (inputNubersValue.length >= 10) {
      formattedInputValue += `-${inputNubersValue.substring(9, 11)}`;
    }
  } else {
    formattedInputValue = `+${inputNubersValue.substring(0, 16)}`;
  }
  input.value = formattedInputValue;
};

const onTelKeyDown = (e) => {
  const input = e.target;
  if (e.keyCode === 8 && getInputNumbersValue(input).length === 1) {
    input.value = '';
  }
};

inputTels.forEach((input) => {
  input.addEventListener('input', onTelInput);
  input.addEventListener('keydown', onTelKeyDown);
});
