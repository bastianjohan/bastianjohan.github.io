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
  if(pathname == 'https://basboerboom.nl/index.html' || 'https://basboerboom.nl/'){
    if(window.scrollY > 0){
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
})

const flyersContent = document.querySelectorAll(".flyer__content");
const flyersImg = document.querySelectorAll(".flyer__image");

document.addEventListener('scroll', function(){
  flyersContent.forEach(flyer => {
    if(isInView(flyer)){
      flyer.classList.add("visible");
    } else {
      flyer.classList.remove("visible");
    }
  })
  flyersImg.forEach(flyerImg => {
    if(isInView(flyerImg)){
      flyerImg.classList.add("visible");
    } else {
      flyerImg.classList.remove("visible");
    }
  })
})

function isInView(element){
  const rect = element.getBoundingClientRect();
  return rect.bottom > 0 && rect.top < (window.innerHeight - 100||
    document.documentElement.clientHeight - 100);
}