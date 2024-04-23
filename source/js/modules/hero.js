import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';import 'swiper/css';
import 'swiper/css';
import 'swiper/css/pagination';

const sliderHero = document.querySelector('.hero__slider');

const swiperHero = new Swiper(sliderHero, {
  modules: [Navigation, Pagination],
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  loop: true,
  watchSlidesProgress: true,
});

const addTabindexBullets = () => {
  const bullets = document.querySelectorAll('.swiper-pagination-bullet');
  bullets.forEach((bullet) => {
    bullet.setAttribute('tabindex', '0');
  });
};

export {swiperHero, addTabindexBullets};
