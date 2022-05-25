/* eslint-disable */
import Swiper, {Navigation, Pagination} from 'swiper';

const trainersSwiper = () => {
  const swiper = new Swiper('.trainers__list-wrapper', {
    // configure Swiper to use modules
    modules: [Navigation, Pagination],
    direction: 'horizontal',
    slidesPerView: 4,
    spaceBetween: 40,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },

      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },

      1200: {
        slidesPerView: 4,
        spaceBetween: 25,
      },

      1350: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },

    // Navigation arrows
    navigation: {
      nextEl: '.trainers__button--next',
      prevEl: '.trainers__button--back',
    },
  });
};

export {trainersSwiper};
