import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';
import 'swiper/css';
const reviewsSlider = document.querySelector('.reviews__slider');

new Swiper(reviewsSlider, {
  modules: [Navigation],
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  activeIndex: 0,
  loop: false,
  slidesPerView: 1,
  initialSlide: 0,
  centeredSlides: true,
  setWrapperSize: true,
});
