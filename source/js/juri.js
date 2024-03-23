import Swiper from 'swiper';
import {Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';
const jurySwiper = document.querySelector('juri__slider.swiper');


new Swiper(jurySwiper, {
  modules: [Navigation, Pagination],
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  activeIndex: 0,
  loop: true,
  slidesPerView: 1,
  initialSlide: 0,
  //breakpointsBase: 'conteiner',

  breakpoints: {
    320: {
      initialSlide: 2,
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    1366: {
      initialSlide: 0,
      slidesPerView: 4,
      spaceBetween: 40,
    },
  }
});

//jurySwiper.slideNext();

