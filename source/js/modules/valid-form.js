const myInput = document.getElementById('input-phone');
import iMask from 'imask';
const maskOptions = {mask: '+{7}(000)000-00-00'};


const validForm = () => {
  document.addEventListener('DOMContentLoaded', () => {
    iMask(myInput, maskOptions);
  });
};

export {validForm};
