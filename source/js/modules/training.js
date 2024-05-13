import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';import 'swiper/css';
import 'swiper/css/pagination';

const sliderTraining = document.querySelector('.training__slider');

const swiperTours = new Swiper(sliderTraining, {
  modules: [Navigation, Pagination],
  navigation: {
    nextEl: '.training__button--next',
    prevEl: '.training__button--prev',
  },
  activeIndex: 0,
  loop: false,
  slidesPerView: 1,
  initialSlide: 2,
  watchSlidesProgress: true,
  spaceBetween: 100,

  breakpoints: {
    320: {
      initialSlide: 2,
      navigation: false,
      width: 290,
      slidesPerView: 1,
    },
    768: {
      initialSlide: 0,
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1440: {
      initialSlide: 0,
      slidesPerView: 4,
      spaceBetween: 20,
    },
  }
});

export {swiperTours};
