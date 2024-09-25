const swiper = new Swiper('.swiper', {
  grabCursor: true,
  spaceBetween: 32,
  pagination: {
    el: '.swiper-pagination',
  },

  breakpoints: {
    750: {
      slidesPerView: 2,
    },
  },
});

const menu_bar = document.querySelector('.menu');
const menu = document.querySelector('.nav__links');
const overlay = document.querySelector('.overlay');

menu_bar.addEventListener('click', () => {
  menu.classList.add('show');
  overlay.classList.add('show');
});

overlay.addEventListener('click', () => {
  menu.classList.remove('show');
  overlay.classList.remove('show');
});
function removeOverlay() {}
