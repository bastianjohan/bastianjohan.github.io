window.transitionToPage = function(href) {
  document.querySelector('body').style.opacity = 0
  setTimeout(function() { 
      window.location.href = href
  }, 500)
}

document.addEventListener('DOMContentLoaded', function(event) {
  document.querySelector('body').style.opacity = 1
})

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);

function isInView(element){
  const rect = element.getBoundingClientRect();
  return rect.bottom > 0 && rect.top < (window.innerHeight - 100 ||
    document.documentElement.clientHeight - 100);
}

const navbar = document.querySelector('.navbar');
const navbarMenu = document.querySelector('.navbar__menu');
const heroH3 = document.querySelector('.hero h3');
const heroH2 = document.querySelector('.hero h2');

const flyersContent = document.querySelectorAll(".flyer__content");
const flyersImg = document.querySelectorAll(".flyer__image");

document.addEventListener('scroll', () => {
  const scrolled = window.scrollY > 0;

  if (navbar) navbar.classList.toggle('scrolled', scrolled);
  if (navbarMenu) navbarMenu.classList.toggle('scrolled', scrolled);
  if (heroH3) heroH3.classList.toggle('scrolled', scrolled);
  if (heroH2) heroH2.classList.toggle('scrolled', scrolled);

  flyersContent.forEach(flyer => {
    const inView = isInView(flyer);
    if (flyersContent) flyer.classList.toggle("visible", inView);
  })
  flyersImg.forEach(flyerImg => {
    const inView = isInView(flyerImg);
    if (flyersImg) flyerImg.classList.toggle("visible", inView);
  })
})