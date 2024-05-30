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
    paginationUpdate: true,
  },
  loop: true,
  watchSlidesProgress: true,
  autoHeight: true,
  breakpoints: {
    1439: {
      allowTouchMove: false,
    },
  },
});

const addTabindexBullets = () => {
  const bullets = document.querySelectorAll('.swiper-pagination-bullet');
  bullets.forEach((bullet) => {
    bullet.setAttribute('tabindex', '0');
  });
};

// Вычисление нижнего отступа пагинации активного слайда в зависимости от высоты контейнера для текста

const swiperPagination = sliderHero.querySelector('.hero__pagination');
const slide = sliderHero.querySelector('.swiper-slide');
const slideContainerHeight = sliderHero.querySelector('.hero__container').clientHeight;
const slideStyle = window.getComputedStyle(slide, null);

console.log(slideStyle.paddingBottom, slideContainerHeight);

const slidePaddingBottom = parseFloat(slideStyle.paddingBottom);


swiperPagination.style.marginBottom = `${slideContainerHeight + slidePaddingBottom - 8}px`;


export {swiperHero, addTabindexBullets};
