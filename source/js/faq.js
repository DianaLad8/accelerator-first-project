const faqTabsElements = document.querySelectorAll('.tabs__element');
const faqTabsButtons = document.querySelectorAll('.tabs__button');
const faqTabsButtonsArray = Array.from(faqTabsButtons);

window.addEventListener('DOMContentLoaded', () => {
  initAccordion();
});

const onButtonFaqClick = (button) => {
  button.addEventListener('click', () => {
    const prevActiveButton = document.querySelector('.tabs__button.active');
    const prevActiveElement = document.querySelector('.tabs__element.active');

    if (prevActiveButton) {
      prevActiveButton.classList.remove('active');
    }
    if (prevActiveElement) {
      prevActiveElement.classList.remove('active');
    }
    button.classList.add('active');

    const nextActiveElementTab = button.dataset.faqTab;
    for (const element of faqTabsElements) {
      if (element.dataset.faqEl === nextActiveElementTab) {
        element.classList.add('active');
        initAccordion();
      }
    }
  });
};

const initFaqTabs = () => faqTabsButtonsArray.forEach((button) => onButtonFaqClick(button));


function initAccordion () {
  const currentTabActive = document.querySelector('.accordion.active');
  const accordionElements = currentTabActive.querySelectorAll('.accordion__element');
  const accordionElementsArray = Array.from(accordionElements);
  accordionElementsArray.forEach((element) => {
    const buttonElement = element.querySelector('button');
    buttonElement.addEventListener('click', () => {
      element.classList.toggle('open');
    });
  });
}

initFaqTabs();
