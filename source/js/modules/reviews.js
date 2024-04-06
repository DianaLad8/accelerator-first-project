import Swiper from 'swiper';
import {Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';
const reviewsSlider = document.querySelector('.reviews__slider');

const reviewsSwiper = new Swiper(reviewsSlider, {
  modules: [Navigation, Pagination],
  navigation: {
    nextEl: '.swiper-button-next.reviews__button--next',
    prevEl: '.swiper-button-prev.reviews__button',
  },
  loop: false,
  spaceBetween: 100,
});

export {reviewsSwiper};
