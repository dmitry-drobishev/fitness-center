const myInput = document.getElementById('input-phone');
import iMask from 'imask';
const maskOptions = {mask: '+{7}(000)000-00-00'};


const validForm = () => {
  document.addEventListener('DOMContentLoaded', () => {
    iMask(myInput, maskOptions);
  });

  const PHONE_LENGTH = 16;
  const userInput = document.getElementById('input-phone');
  const submitButton = document.getElementById('free-button');

  submitButton.addEventListener('click', () => {
    let a = userInput.value.length;

    if (a < PHONE_LENGTH) {
      userInput.setCustomValidity('- номер телефона состоит из 11 цифр; - в номере телефона не может быть букв;');
    } else {
      userInput.setCustomValidity('');
    }
  });
};

export {validForm};
