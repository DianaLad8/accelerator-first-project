import Swiper from 'swiper';
import {Navigation, Pagination, Grid} from 'swiper/modules';
import 'swiper/css';

const newsSwiper = document.querySelector('.news__slider');

const newsSlider = new Swiper(newsSwiper, {
  modules: [Navigation, Pagination, Grid],
  navigation: {
    nextEl: '.news__navigation .swiper-button-next',
    prevEl: '.news__navigation .swiper-button-prev',
  },
  pagination: {
    el: '.news__pagination',
    clickable: true,
    dynamicBullets: true,
    dynamicMainBullets: 3,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
  slidesPerView: 2,
  watchSlidesProgress: true,
  autoHeight: false,
  slidesPerGroup: 1,
  initialSlide: 0,
  loop: false,
  breakpoints: {
    320: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 20,
      width: 723,
      grid: {
        rows: 2,
        fill: 'column',
      },
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 30,
      width: 678,
      grid: {
        rows: 2,
        fill: 'row',
      },
    },
    1439: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 32,
      width: 1240,
      grid: false,
    },
  }
});

export {newsSlider};
