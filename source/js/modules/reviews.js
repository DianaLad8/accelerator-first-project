import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';import 'swiper/css';
import 'swiper/css/pagination';

const sliderReviews = document.querySelector('.reviews__slider');

const swiperReviews = new Swiper(sliderReviews, {
  modules: [Navigation, Pagination],
  navigation: {
    nextEl: '.reviews__button--next',
    prevEl: '.reviews__button--prev',
  },
  activeIndex: 0,
  loop: false,
  slidesPerView: 1,
  initialSlide: 0,
  watchSlidesProgress: true,
  spaceBetween: 30,

  breakpoints: {
    320: {
      navigation: false,
      width: 290,
      slidesPerView: 1,
      centeredSlides: true,
    },
    768: {
      slidesPerView: 1.23,
      spaceBetween: 5,
    },
    1440: {
      slidesPerView: 1.7,
      spaceBetween: 110,
    },
  }
});

export {swiperReviews};
