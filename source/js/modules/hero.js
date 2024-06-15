import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';import 'swiper/css';
import 'swiper/css';
import 'swiper/css/pagination';

const sliderHero = document.querySelector('.hero__slider');

const swiperHero = new Swiper(sliderHero, {
  modules: [Navigation, Pagination],
  pagination: {
    el: '.swiper-slide-active .swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  swiperElementNodeName: '.swiper-slide-active .swiper-pagination',
  uniqueNavElements: true,
  loop: true,
  watchSlidesProgress: true,
  autoHeight: true,
  breakpoints: {
    1439: {
      allowTouchMove: false,
    },
  },
});

swiperHero.on('slideChangeTransitionEnd', () => {
  const slideActiveIndex = swiperHero.realIndex;
  const slideActive = swiperHero.slides[slideActiveIndex];
  const activeSlidePagination = slideActive.querySelector('.hero__pagination');
  const slideActiveBullets = activeSlidePagination.querySelectorAll('.swiper-pagination-bullet');

  slideActiveBullets.forEach((bullet) => {
    bullet.addEventListener('click', () => {
      const indexSlideTo = +bullet.dataset.index;
      swiperHero.slideToLoop(indexSlideTo);
    });
  });
});

const addTabindexBullets = () => {
  const bullets = document.querySelectorAll('.swiper-pagination-bullet');
  bullets.forEach((bullet) => {
    bullet.setAttribute('tabindex', '0');
  });
};

export {swiperHero, addTabindexBullets};
