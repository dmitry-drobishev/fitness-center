import Swiper, {Navigation, Pagination} from 'swiper';

const reviewsSwiper = () => {
  const swiper = new Swiper('.reviews', {
    modules: [Navigation, Pagination],
    // loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.reviews__button--next',
      prevEl: '.reviews__button--back',
    },
  });
};

export {reviewsSwiper};
