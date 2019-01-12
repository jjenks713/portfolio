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
