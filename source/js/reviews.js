import Swiper from 'swiper';
import {Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';
const reviewsSlider = document.querySelector('.reviews__slider');

const reviewsSwiper = new Swiper(reviewsSlider, {
  modules: [Navigation, Pagination],
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: false,
});

export {reviewsSwiper};
