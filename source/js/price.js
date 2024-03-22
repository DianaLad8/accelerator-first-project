const priceItems = document.querySelectorAll('.price-item__item');
const tabPriceButtons = document.querySelectorAll('.price__button');
const priceItemsArray = Array.from(priceItems);

function changesActiveClass (button) {
  const nextActiveButtonTab = button.dataset.tab;

  priceItemsArray.forEach((item) => {
    const valueTabAll = item.querySelectorAll('.price-item__value');
    valueTabAll.forEach((value) => {
      const nextActiveValueTab = value.dataset.price;
      return (nextActiveValueTab === nextActiveButtonTab)
        ? value.classList.add('active')
        : value.classList.remove('active');
    });
  });
}

const onButtonPriceClick = () => {
  tabPriceButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const prevActiveButton = document.querySelector('.price__button.active');
      if (prevActiveButton) {
        prevActiveButton.classList.remove('active');
      }
      button.classList.add('active');
      changesActiveClass(button);
    });
  });
};

const onButtonPriceHover = () => {
  priceItems.forEach((item) => {
    const link = item.querySelector('.price-item__link');

    link.addEventListener('mouseover', () => {
      item.classList.add('price-item__item--hover');
    });

    link.addEventListener('mouseout', () => {
      item.classList.remove('price-item__item--hover');
    });

  });
};

export {onButtonPriceHover, onButtonPriceClick};

