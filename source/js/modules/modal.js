const aboutButton = document.querySelector('.about__button');
const overlay = document.querySelector('.modal');
const modal = document.querySelector('.modal__details');
const modalClose = document.querySelector('.modal__close');
const modalChildren = modal.children;

const onAboutButton = () => {
  overlay.style.display = 'flex';
  modal.style.display = 'flex';
};

const onModalClose = () => {
  overlay.style.display = 'none';
  modal.style.display = 'none';
};

const onOverlayClick = (e) => {
  const click = e.target;
  if (click === overlay) {
    onModalClose();
  }
};

aboutButton.addEventListener('click', onAboutButton);
modalClose.addEventListener('click', onModalClose);
overlay.addEventListener('click', onOverlayClick);
