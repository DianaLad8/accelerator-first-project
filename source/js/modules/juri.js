import Swiper from 'swiper';
import {Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';

const juriSlider = document.querySelector('.juri__slider');

const jurySwiper = new Swiper(juriSlider, {
  modules: [Navigation, Pagination],
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  activeIndex: 0,
  loop: true,
  slidesPerView: 1,
  initialSlide: 0,
  watchSlidesProgress: true,
  spaceBetween: 100,

  breakpoints: {
    320: {
      navigation: false,
      width: 320,
      initialSlide: 3,
      slidesPerView: 1,
    },
    768: {
      initialSlide: 1,
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1366: {
      initialSlide: 1,
      slidesPerView: 4,
      spaceBetween: 40,
    },
  }
});

const addVisibleSlidesTabindex = () => {
  const visibleSlides = juriSlider.querySelectorAll('.swiper-slide-fully-visible');

  visibleSlides.forEach((slide) => {
    slide.setAttribute('tabindex', '0');
  });
};

export {jurySwiper, addVisibleSlidesTabindex};
