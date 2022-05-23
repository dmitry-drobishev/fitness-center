import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
// import {chooseMembership} from './modules/modals/choose-membership';
// import {playVideo} from './modules/modals/play-video';
// import {validForm} from './modules/modals/valid-form';


// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
  });
});

// core version + navigation, pagination modules:
import Swiper, {Navigation, Pagination} from 'swiper';
// import Swiper and modules styles

const reviewsSwiper = new Swiper('.reviews', {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],

  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.reviews__button--next',
    prevEl: '.reviews__button--back',
  },

});


// playVideo();
// chooseMembership();
// validForm();

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используейтся matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
