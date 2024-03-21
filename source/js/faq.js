const faqTabsElements = document.querySelectorAll('.tabs__element');
const faqTabsButtons = document.querySelectorAll('.tabs__button');
const accordionElements = document.querySelectorAll('.tabs__element.active .accordion__element');

initAccordion(accordionElements);

faqTabsButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const prevActiveButton = document.querySelector('.tabs__button.active');
    const prevActiveElement = document.querySelector('.tabs__element.active');

    if (prevActiveButton) {
      prevActiveButton.classList.remove('active');
    }
    if (prevActiveElement) {
      prevActiveElement.classList.remove('active');
    }

    const nextActiveElementTab = button.dataset.faqTab;
    for (const element of faqTabsElements) {
      if (element.dataset.faqEl === nextActiveElementTab) {
        element.classList.add('active');
      }
      button.classList.add('active');
      const accordionCurrentElements = document.querySelectorAll('.tabs__element.active .accordion__element');

      initAccordion(accordionCurrentElements);
    }
  });
});


function initAccordion (elements) {
  for (const element of elements) {
    const buttonElement = element.querySelector('button');
    buttonElement.addEventListener('click', () => {
      element.classList.toggle('active');
    });
  }
}
