import Swiper, {Navigation, Pagination} from 'swiper';

const trainersSwiper = () => {
  const swiper = new Swiper('.trainers__wrapper', {
    // configure Swiper to use modules
    modules: [Navigation, Pagination],
    direction: 'horizontal',
    // loop: true,
    slidesPerView: 4,
    spaceBetween: 40,
    breakpoints: {
      319: {
        slidesPerView: 1,
      },

      767: {
        slidesPerView: 2,
        spaceBetween: 30,
      },

      1199: {
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
