const menu = document.querySelector('.menu');
const burger = document.querySelector('.header__burger');
const burgerContent  = document.querySelector('.header__content');
const hiddenSectionTwo  = document.querySelector('.header__section-two');

if (menu && burger && burgerContent && hiddenSectionTwo) {
  burger.addEventListener('click', () => {
    menu.classList.toggle('_active');
    burger.classList.toggle('_active');
    burgerContent.classList.toggle('_full');
    hiddenSectionTwo.classList.toggle('_full');
  })
}

new Accordion('.accordion-container');



const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
