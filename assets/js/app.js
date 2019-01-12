$(document).ready(function () {
  $('.carousel').carousel();
  $('.carousel-slider').slider({ full_width: true });
  $('.slider').slider({ full_width: true });
  $('#about').hide();
  $('#about-2').hide();
});

$('#about-btn').click(function () {
  $('#about').toggle();
});

$('#about-btn-2').click(function () {
  $('#about-2').toggle();
});

$('.carousel.carousel-slider').carousel({
  fullWidth: true
});

function myFunction(x) {
  if (x.matches) { // If media query matches
    document.body.style.backgroundColor = "yellow";
  } else {
   document.body.style.backgroundColor = "pink";
  }
}

var x = window.matchMedia("(max-width: 700px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes