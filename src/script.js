const swiper = new Swiper('.testimonial__container', {
  grabCursor: true,
  spaceBetween: 32,
  pagination: {
    el: '.testimonial__pagination',
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
function removeOverlay() {
  menu.classList.remove('show');
  overlay.classList.remove('show');
}

const swiperProduct = new Swiper('.mySwiper', {
  grabCursor: true,
  spaceBetween: 8,
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    760: {
      slidesPerView: 4,
    },
  },
});

// img chooser
const imageHolder = document.querySelector('.image-holder');
const mainImage = document.querySelector('.main');
const imgs = document.querySelectorAll('.sub');
imageHolder.addEventListener('click', (e) => {
  if (!e.target.closest('img')) return;
  let imagePressed = e.target.closest('img');
  removeAllCl();
  imagePressed.classList.add('current-img');
  mainImage.src = imagePressed.src;
});
// remove current class
function removeAllCl() {
  console.log('done');
  imgs.forEach((img) => {
    img.classList.remove('current-img');
  });
}
// select is active
const selectPro = document.querySelector('#province');
const selectCity = document.querySelector('#city');

selectPro.addEventListener('change', (e) => {
  if (!selectPro.value) return;
  console.log(selectCity.disabled);
  selectCity.disabled = false;
});
// number of item ordered
const orderInput = document.querySelector('#order_size');
const orderSize = document.querySelector('.order');
const total = document.querySelector('.total');
let price = +total.textContent;
orderSize.addEventListener('click', (e) => {
  if (!e.target.closest('i')) return;
  if (e.target.closest('i').classList.contains('fa-plus')) {
    if (+orderInput.value >= 9) return;
    orderInput.value = +orderInput.value + 1;
    total.textContent = +total.textContent + price;
  }
  if (e.target.closest('i').classList.contains('fa-minus')) {
    if (+orderInput.value <= 1) return;
    orderInput.value -= 1;
    total.textContent = +total.textContent - price;
  }
});
