"use strict"

// меню бургер
const menu = document.querySelector('.menu');
const burger = document.querySelector('.header__burger');
const burgerContent = document.querySelector('.header__content');
const hiddenSectionTwo = document.querySelector('.header__section-two');

if (menu && burger && burgerContent && hiddenSectionTwo) {
  burger.addEventListener('click', () => {
    menu.classList.toggle('_active');
    burger.classList.toggle('_active');
    burgerContent.classList.toggle('_full');
    hiddenSectionTwo.classList.toggle('_full');
  })
}

// меню аккардион
new Accordion('.accordion-container');


// поиск товаров
const icon = document.querySelector('.search__icon');
const search = document.querySelector('.search');
const clear = document.querySelector('.search__clear');
const clearSearch = document.getElementById('mysearch');
if (icon && search && clear && clearSearch) {
  icon.addEventListener('click', () => {
    search.classList.toggle('active');
  })

  clear.addEventListener('click', () => {
    clearSearch.value = '';
  })
}

// свайвер
let swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 40,
    },
  },
});

let swiperTwo = new Swiper(".mySwiper-two", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});



// отправка почты
let validation = new JustValidate("form")

validation.addField("#email", [
  {
    rule: "required",
    errorMessage: "Введите почту"
  },
  {
    rule: "minLength",
    value: 5,
    errorMessage: "Минимум 5 символов"
  },
  {
    rule: 'email',
    errorMessage: "Введите адрес почты"
  }
])
.onSuccess(async function () {
 let data = {
  email: document.getElementById("email").value
 }

 let response = await fetch("mail.php", {
  method: "POST",
  body: JSON.stringify(data),
  headers: {
    "Content-Type": "application/json; charset=UTF-8"
  }
 }) 

 let result = await response.text()

 alert(result)
})





//анимации
gsap.registerPlugin(ScrollTrigger)

const laptopScreen = window.matchMedia('(min-width:767px)');

if (laptopScreen.matches) {

  // create-section

  gsap.fromTo(
    ".anim1",
    {
      opacity: 0,
      xPercent: 50,
    },
    {
      scrollTrigger: {
        trigger: '.create__description',
        start: 'top center ',

      },
      duration: 1.5,
      opacity: 1,
      xPercent: 0,
      ease: "none"
    });

  gsap.fromTo(
    ".anim2",
    {
      opacity: 0,
      xPercent: -50,
    },
    {
      scrollTrigger: {
        trigger: '.anim1',
        start: 'center center',

      },
      duration: 1.5,
      opacity: 1,
      xPercent: 0,
      ease: "none"
    });
  gsap.fromTo(
    ".anim3",
    {
      opacity: 0,
      xPercent: 50,
    },
    {
      scrollTrigger: {
        trigger: '.anim2',
        start: 'center center',

      },
      duration: 1.5,
      opacity: 1,
      xPercent: 0,
      ease: "none"
    });
  // templates-section

  gsap.fromTo(
    ".templates__block_image-one",
    {
      opacity: 0,
      yPercent: 50,
    },
    {
      scrollTrigger: {
        trigger: '.swiper-wrapper',
        start: 'center center',

      },
      duration: 1.5,
      opacity: 1,
      yPercent: 0,
      ease: "none",
      delay: 1
    });

  gsap.fromTo(
    ".templates__block_image-two",
    {
      opacity: 0,
      yPercent: -50,
    },
    {
      scrollTrigger: {
        trigger: '.swiper-wrapper',
        start: 'center center',

      },
      duration: 1.5,
      opacity: 1,
      yPercent: 0,
      ease: "none",
      delay: 1
    });
  // tee-space-section

  gsap.fromTo(
    ".tee-space__list-item_anim",
    {
      y: 100,
      opacity: 0
    },
    {
      scrollTrigger: {
        trigger: '.templates__container',
        start: 'center center',
      },
      y: 0,
      opacity: 1,
      duration: 2.5,
      ease: "power3.out",
      delay: 1
    });

  gsap.fromTo(
    ".tee-space__booking",
    {
      scale: 0,
    },
    {
      scrollTrigger: {
        trigger: '.tee-space__list-item_anim-botton',
        start: 'top center',
      },
      scale: 1,
      duration: 3,
      ease: "power3.out"
    });
}

// ideas-section
gsap.fromTo(
  ".ideas__img-inner",
  {
    scale: 0,
  },
  {
    scrollTrigger: {
      trigger: '.anim3',
      start: 'bottom center',
    },
    scale: 1,
    duration: 2,
    rotation: 360,
    ease: "power3.out"
  });

// movement-section

gsap.fromTo(
  ".movement__img-inner-anim-left",
  {
    opacity: 0,
    xPercent: -100
  },
  {
    scrollTrigger: {
      trigger: '.user-comments',
      start: 'bottom center',
    },
    opacity: 1,
    xPercent: 0,
    duration: 2,
    rotation: 360,
    ease: "power3.out"
  });

gsap.fromTo(
  ".movement__img-inner-anim-right",
  {
    opacity: 0,
    xPercent: 100
  },
  {
    scrollTrigger: {
      trigger: '.user-comments',
      start: 'bottom center',
    },
    opacity: 1,
    xPercent: 0,
    duration: 2,
    rotation: 360,
    ease: "power3.out"
  });

// social-section

gsap.fromTo(
  ".social__link",
  {
    opacity: 0,
    yPercent: -100,
  },
  {
    scrollTrigger: {
      trigger: '.movement',
      start: 'center center',
    },
    yPercent: 0,
    opacity: 1,
    duration: 1.5,
    stagger: 0.3
  });









