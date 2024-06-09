import Swiper from 'swiper';
import {Navigation, Pagination, Scrollbar} from 'swiper/modules';
import 'swiper/css';

const programsSwiper = document.querySelector('.programs__swiper');

const programsSlider = new Swiper(programsSwiper, {
  modules: [Navigation, Pagination, Scrollbar],
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
  activeIndex: 0,
  loop: false,
  autoplay: false,
  slidesPerView: 1,
  initialSlide: 0,
  watchSlidesProgress: true,
  spaceBetween: 30,
  breakpoints: {
    320: {
      width: 290,
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2.25,
      spaceBetween: 30,
      width: 723,
    },
    1439: {
      allowTouchMove: false,
      slidesPerView: 3,
      spaceBetween: 32,
      width: 1240,
    },
  }
});

export {programsSlider};
