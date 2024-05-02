import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';import 'swiper/css';
import 'swiper/css/pagination';

const sliderGallery = document.querySelector('.gallery__slider.swiper');

function initSwiperGallery () {
  new Swiper(sliderGallery, {
    modules: [Navigation, Pagination],
    navigation: {
      nextEl: '.gallery__button--next',
      prevEl: '.gallery__button--prev',
    },
    loop: true,
    breakpoints: {
      320: {
        navigation: false,
        width: 320,
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1440: {
        autoplay:false,
      },
    }
  });
}

const initSliderGallery = () => {
  if (window.matchMedia('(max-width: 1439px)').matches) {
    initSwiperGallery();
  }
};

export {initSliderGallery};
