"use strict"

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

new Accordion('.accordion-container');


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


document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('form');
  form.addEventListener('submit', formSend);

  async function formSend(e) {
    e.preventDefault();

    let error = formValidate(form);

    let formData = new FormData(form);

    if (error === 0) {
      form.classList.add('_sending'); 
      let response = await fetch('sendmail.php', {
        method: 'POST',
        body: formData
      });
      if (response.ok) {
        let result = await response.json();
        alert(result.message);
        form.reset();
        form.classList.remove('_sending');
      } else {
        alert('Ошибка');
        form.classList.remove('_sending');
      }
    } else {
      alert('Заполните обязательные поля');
    }
  }

  function formValidate(form) {
    let error = 0;
    let formReq = document.querySelectorAll('._req');

    for (let index = 0; index < formReq.length; index++) {
      const input = formReq[index];
      formRemoveError(input);

      if (input.classList.contains('_email')) {
        if (emailTest(input)) {
          formAddError(input);
          error++;
        }
      } else {
        if (input.value === '') {
          formAddError(input);
          error++;
        }
      }
    }
  }

  function formAddError(input) {
    // input.parentElement.classList.add('_error'); добавляет класс и к родительскому эллементу input в моем случае к form
    input.classList.add('_error');
  }
  function formRemoveError(input) {
    input.parentElement.classList.remove('_error');
    input.classList.remove('_error');
  }
  // Функция теста email
  function emailTest(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
  }
});




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









