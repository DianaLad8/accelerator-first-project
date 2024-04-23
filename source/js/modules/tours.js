import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';import 'swiper/css';
import 'swiper/css/pagination';

const sliderTours = document.querySelector('.tours__slider');

const swiperTours = new Swiper(sliderTours, {
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
      slidesPerView: 2,
      spaceBetween: 18,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  }
});

const addTabindexButtons = () => {
  const buttons = document.querySelectorAll('.swiper-button');
  buttons.forEach((bullet) => {
    bullet.setAttribute('tabindex', '0');
  });
};

export {swiperTours, addTabindexButtons};
