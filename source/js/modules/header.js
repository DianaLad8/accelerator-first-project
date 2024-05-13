const navList = document.querySelector('.nav__list');
const navToggle = document.querySelector('.nav__toggle');
const body = document.querySelector('.page-body');
const navLinkAll = document.querySelectorAll('.header__nav .nav__link');

function toggleBurger () {
  navList.classList.toggle('nav__list--open');
}

function toggleButton () {
  navToggle.classList.toggle('nav__toggle--open');
}

function toggleFixBody () {
  body.classList.toggle('page-body--fix');
}

const onBurgerButton = () => {
  navToggle.addEventListener('click', () => {
    toggleBurger();
    toggleButton();
    if (window.matchMedia('(max-width: 768px)').matches) {
      toggleFixBody();
    }
  });
};

const onLinkClick = () => {

  navLinkAll.forEach((link) => {

    link.addEventListener('click', () => {
      if (window.matchMedia('(max-width: 768px)').matches) {
        toggleBurger();
        toggleButton();
        toggleFixBody();
      }
    });
  });
};

export {onBurgerButton, onLinkClick};
