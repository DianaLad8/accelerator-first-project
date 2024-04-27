import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';import 'swiper/css';
import 'swiper/css/pagination';

const sliderReviews = document.querySelector('.reviews__slider');

const swiperReviews = new Swiper(sliderReviews, {
  modules: [Navigation, Pagination],
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  activeIndex: 0,
  loop: false,
  slidesPerView: 1,
  initialSlide: 0,
  watchSlidesProgress: true,
  spaceBetween: 100,

  breakpoints: {
    320: {
      navigation: false,
      width: 290,
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1.23,
      spaceBetween: 30,
    },
    1440: {
      slidesPerView: 1.7,
      spaceBetween: 110,
    },
  }
});

export {swiperReviews};
