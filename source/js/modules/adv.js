import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';import 'swiper/css';
import 'swiper/css/pagination';

const sliderAdv = document.querySelector('.adv__slider');

function initSwiperAdv () {
  new Swiper(sliderAdv, {
    modules: [Navigation, Pagination],
    navigation: {
      nextEl: '.adv__button--next',
      prevEl: '.adv__button--prev',
    },
    breakpoints: {
      320: {
        autoplay:false,
      },
      1440: {
        spaceBetween: 30,
        loop: true,
        slidesPerView: 'auto',
        slidesPerGroup: 2,
        initialSlide: 2,
        loopAddBlankSlides: false,
        centeredSlides: true,
      },
    }
  });
}

const initSliderAdv = () => {
  if (window.matchMedia('(min-width: 1439px)').matches) {
    initSwiperAdv();
  }
};

export {initSliderAdv};
