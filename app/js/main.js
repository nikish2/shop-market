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



// window.addEventListener('scroll', animOnScroll);
// if (animItems.length > 0) {
//   function animOnScroll() {
//     for (let index = 0; index < animItems.length; index++) {
//       const animItem = animItems[index];
//       const animItemHeight = animItem.offsetHeight;
//       const animItemOffset = offset(animItem).top;
//       const animStart = 4;

//       let animItemPoint = window.innerHeight - animItemHeight / animStart;
//       if (animItemHeight > window.innerHeight) {
//         animItemPoint = window.innerHeight - window.innerHeight / animStart;
//       }

//       if((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
//         animItem.classList.add('_active');
//       } else {
//         animItem.classList.remove('_active');
//       }

//     }
//   }
//   function offset(el) {
//     const rect = el.getBoundingClientRect(),
//       scrollLeft = window.scrollX || document.documentElement.scrollLeft,
//       scrollTop = window.scrollY || document.documentElement.scrollTop;
//     return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
//   }
// }



// gsap.to(".brand__partner", {
//   scrollTrigger: ".brand__partner",
//   opacity: 1,
//   x: 0,
//   duration: 0.5
// });


// gsap.fromTo(
//   ".brand__partner",
//   {
//     opacity: 0,
//     x: "-100%",
//   },
//   {
//     scrollTrigger: ".anim-items",
//     duration: 1,
//     opacity: 1,
//     x: 0,
//     ease: "none"
//   }
// );
gsap.registerPlugin(ScrollTrigger)

gsap.fromTo(
  ".anim1",
  {
    opacity: 0,
    xPercent: 50,
  },
  {
    scrollTrigger: {
      trigger: '.brand__partner',
      start: 'top botton',

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
      start: 'top top',

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
      start: 'top top',

    },
    duration: 1.5,
    opacity: 1,
    xPercent: 0,
    ease: "none"
  });

gsap.fromTo(
  ".ideas__img-inner",
  {
    scale: 0,
  },
  {
    scrollTrigger: {
      trigger: '.anim3',
      start: 'bottom top',
    },
    scale: 1,
    duration: 2,
    rotation: 360,
    ease: "power3.out"
  });

gsap.fromTo(
  ".tee-space__list-item_anim",
  {
    y: 100,
    opacity: 0
  },
  {
    scrollTrigger: {
      trigger: '.templates__block_image-two',
      start: 'center top',
    },
    y: 0,
    opacity: 1,
    duration: 2.5,
    ease: "power3.out"
  });

gsap.fromTo(
  ".tee-space__booking",
  {
    scale: 0,
  },
  {
    scrollTrigger: {
      trigger: '.tee-space__list-item_anim-botton',
      start: 'top top',
    },
    scale: 1,
    duration: 3,
    ease: "power3.out"
  });

  gsap.fromTo(
    ".social__link",
    {
      opacity: 0,
      yPercent: -100,
    },
    {
      scrollTrigger: {
        trigger: '.movement',
        start: 'top top',
      },
      yPercent: 0,
      opacity: 1,
      duration: 1.5,
      stagger: 0.3
    });