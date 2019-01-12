$(document).ready(function () {
  $('.carousel').carousel();
  $('.carousel-slider').slider({ full_width: true });
  $('.slider').slider({ full_width: true });
  $('#about').hide();
  $('#about-2').hide();
});



$('.carousel.carousel-slider').carousel({
  fullWidth: true
});

function myFunction(x) {
  if (x.matches) { // If media query matches
    $('#about-btn').click(function () {
      $('#about').toggle();
      $('#about-btn-2').toggle();
    });
    
    $('#about-btn-2').click(function () {
      $('#about-2').toggle();
      $('#about-btn').toggle();
    });
  } else {
    $('#about-btn').click(function () {
      $('#about').toggle();
    });
    
    $('#about-btn-2').click(function () {
      $('#about-2').toggle();
    });
  }
}

var x = window.matchMedia("(max-width: 450px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes