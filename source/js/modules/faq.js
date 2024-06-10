const faqItem = document.querySelectorAll('.faq__item');

const onFaqItemClick = (e) => {
  const element = e.target;
  const currentItem = element.closest('li');
  const currentButtom = currentItem.querySelector('button');
  const currentContent = currentItem.querySelector('.faq__content');

  currentButtom.classList.toggle('faq__button--open');
  currentContent.classList.toggle('faq__content--open');
};

faqItem.forEach((item) => {
  item.addEventListener('click', onFaqItemClick);
});
