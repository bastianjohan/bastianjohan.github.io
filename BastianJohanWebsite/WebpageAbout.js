var opopasdf;
// var x = innerHeight;

window.transitionToPage = function(href) {
    document.querySelector('body').style.opacity = 0
    opopasdf = 255;
    x = innerHeight;
    setTimeout(function() { 
        window.location.href = href
    }, 500)
  }
  
document.addEventListener('DOMContentLoaded', function(event) {
    document.querySelector('body').style.opacity = 1
    opopasdf = 0;
})