import Swiper from 'swiper';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';import 'swiper/css';
import 'swiper/css/pagination';

const sliderReviews = document.querySelector('.reviews__slider');

const swiperReviews = new Swiper(sliderReviews, {
  modules: [Navigation, Pagination, Scrollbar],
  navigation: {
    nextEl: '.reviews__buttons .swiper-button-next',
    prevEl: '.reviews__buttons .swiper-button-prev',
  },
  scrollbar: {
    el: '.reviews__navigation .swiper-scrollbar',
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
      slidesPerView: 1.25,
      spaceBetween: 30,
      width: 723,
    },
    1439: {
      allowTouchMove: false,
      slidesPerView: 2,
      spaceBetween: 32,
      width: 1240,
    },
  }
});

export {swiperReviews};
