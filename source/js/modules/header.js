const nav = document.querySelector('.nav');
const navList = nav.querySelector('.nav__list');
const navToggle = nav.querySelector('.nav__toggle');
const navToggleIcon = nav.querySelector('.nav__toggle-icon');
const body = document.querySelector('.page');
const navItems = nav.querySelectorAll('.nav__item');
const navLinkAll = nav.querySelectorAll('.header__nav .nav__link');
const navSublistToggleALL = nav.querySelectorAll('.nav__sublist-toggle');

function toggleNav () {
  nav.classList.toggle('nav--open');
}

function toggleBurger () {
  navList.classList.toggle('nav__list--open');
  const openMenu = navList.classList.contains('nav__list--open');
  const menuLinks = nav.querySelectorAll('.nav__link--menu');

  if (openMenu) {
    navList.setAttribute('aria-hidden', 'false');
    menuLinks.forEach((link) => {
      link.setAttribute('tabindex', '0');
    });
    navSublistToggleALL.forEach((button) => {
      button.setAttribute('tabindex', '0');
    });
  }

}

function toggleButton () {
  navToggle.classList.toggle('nav__toggle--open');
}

function toggleFixBody () {
  body.classList.toggle('page--fix');
}

function defaultNavSublistToggle () {
  navSublistToggleALL.forEach((button) => {
    button.classList.toggle('nav__sublist-toggle--default');
  });
}

const onOverlayClick = () => {
  document.addEventListener('click', (evt) => {
    const click = evt.target;
    const listOpen = navList.classList.contains('nav__list--open');
    const subListOpen = click.getAttribute('data-open');

    if (listOpen && click !== navToggle && click !== navList && click !== navToggleIcon && subListOpen !== 'true') {
      toggleBurger();
      toggleButton();
      toggleFixBody();
      toggleNav();
      defaultNavSublistToggle();
    }
  });
};

const onBurgerButton = () => {
  const openMenu = navList.classList.contains('nav__list--open');
  if (!openMenu) {
    navList.setAttribute('aria-hidden', 'true');
    navLinkAll.forEach((link) => {
      link.setAttribute('tabindex', '-1');
    });
    navSublistToggleALL.forEach((button) => {
      button.setAttribute('tabindex', '-1');
    });
  }
  navToggle.addEventListener('click', (e) => {
    toggleBurger();
    toggleButton();
    toggleFixBody();
    toggleNav();
    e.target.setAttribute(
      'aria-expanded', e.target.classList.contains('nav__toggle--open')
        ? 'true'
        : 'false'
    );
    defaultNavSublistToggle();
  });
};

const onLinkClick = () => {

  navLinkAll.forEach((link) => {

    link.addEventListener('click', () => {
      toggleBurger();
      toggleButton();
      toggleFixBody();
      toggleNav();
      defaultNavSublistToggle();
    });
  });
};

const toggleSubmenu = () => {

  navSublistToggleALL.forEach((button) => {

    button.addEventListener('click', (evt) => {
      evt.stopPropagation();
      const navSubList = button.nextElementSibling;
      const subListLinks = navSubList.querySelectorAll('.nav__link');
      navSubList.classList.toggle('nav__sublist--current');
      button.classList.toggle('nav__sublist-toggle--current');
      const currentLink = button.closest('li');

      if (button.classList.contains('nav__sublist-toggle--current')) {
        currentLink.classList.toggle('nav__item--current');
        button.setAttribute('aria-expanded', 'true');
        navSubList.setAttribute('aria-hidden', 'false');
        navSubList.setAttribute('data-open', 'true');
        navItems.forEach((item) => {
          item.setAttribute('data-open', 'true');
        });
        subListLinks.forEach((link) => {
          link.setAttribute('tabindex', '0');
        });
      } else {
        currentLink.classList.toggle('nav__item--current');
        button.setAttribute('aria-expanded', 'false');
        navSubList.setAttribute('aria-hidden', 'true');
        navSubList.setAttribute('data-open', 'false');
        navItems.forEach((item) => {
          item.setAttribute('data-open', 'false');
        });
        subListLinks.forEach((link) => {
          link.setAttribute('tabindex', '-1');
        });
      }
    });
  });
};

export {onBurgerButton, onLinkClick, onOverlayClick, toggleSubmenu};
