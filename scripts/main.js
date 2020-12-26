var swiper = new Swiper('.last-container', {
    slidesPerView: 4,
    spaceBetween: 32,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.next',
        prevEl: '.prev',
    },
});

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 0,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});

var swiper = new Swiper('.swiper-carousel-first', {
    parallax: true,
    speed: 600,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});

var mySwiper = new Swiper('.sportsmen-container', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 5,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
      },
    centeredSlides: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        bulletActiveClass: 'swiper-pagination-bullet-active',
    },
});

var mySwiper = new Swiper('.tablet-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
      },
    centeredSlides: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        bulletActiveClass: 'swiper-pagination-bullet-active',
    },
});


let burgerButton = document.querySelector(".burger-button");
let mobileButton = document.querySelector(".mobile-burger");
let menuItem = document.querySelector('.menu-tablet__item');
let menuTablet = document.querySelector('.menu-tablet');
let kabinet = document.querySelector('.kabinet');
let kabinetBtn = document.querySelector('.kabinet-btn');
let kabinetBtnMob = document.querySelector('.kabinet-mobile-btn');
let body = document.querySelector('body');
let overlay = document.querySelector('.overlay');
let modal = document.querySelector('.modal');
let checkBtn = document.querySelector('.check-btn');
let check = document.querySelector('.check');
let menuMobileItem = document.querySelector('.menu-mobile__item');
let menuMobile = document.querySelector('.menu-mobile');
let close = document.querySelector('#close');

burgerButton.addEventListener('click', function () {
    menuItem.classList.toggle('block')
    menuTablet.classList.toggle('block')
});

kabinet.addEventListener('click', function () {
    body.classList.add('no-scroll')
    overlay.classList.add('open')
    modal.classList.add('open')
});

kabinetBtn.addEventListener('click', function () {
    body.classList.add('no-scroll')
    overlay.classList.add('open')
    modal.classList.add('open')
});

kabinetBtnMob.addEventListener('click', function () {
    body.classList.add('no-scroll')
    overlay.classList.add('open')
    modal.classList.add('open')
});

overlay.addEventListener('click', function () {
    body.classList.remove('no-scroll')
    overlay.classList.remove('open')
    modal.classList.remove('open')
});

close.addEventListener('click', function () {
    body.classList.remove('no-scroll')
    overlay.classList.remove('open')
    modal.classList.remove('open')
});

checkBtn.addEventListener('click', function () {
check.classList.toggle('block')
});

mobileButton.addEventListener('click', function () {
    menuMobileItem.classList.toggle('block')
    menuMobile.classList.toggle('block')
});