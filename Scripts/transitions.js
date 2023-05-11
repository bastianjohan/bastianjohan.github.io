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
const navLogo = document.querySelector('#navbar-logotxt');

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);

// Show active menu when scrolling
// const highlightMenu = () => {
//   const elem = document.querySelector('.highlight');
//   const homeMenu = document.querySelector('#home-page');
//   const aboutMenu = document.querySelector('#about-page');
//   const servicesMenu = document.querySelector('#services-page');
//   let scrollPos = windows.scrollY;
// }

document.addEventListener('scroll', () =>{
  const header = document.querySelector('.navbar');
  if(window.scrollY > 0){
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
})
document.addEventListener('scroll', () =>{
  var pathname = window.location.href;
  const header = document.querySelector('#dropdown-menu');
  if(pathname == 'file:///C:/Users/Bas/OneDrive/Documenten/GitHub/bastianjohan.github.io/index.html'){
    if(window.scrollY > 0){
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
})