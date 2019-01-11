  $(document).ready(function(){
    $('.carousel').carousel();
    $('.carousel-slider').slider({full_width: true});
    $('.slider').slider({full_width: true});
    $('.collapsible').collapsible();
    $('.dropdown-trigger').dropdown();
    $('#about').hide();
    $('#about-2').hide();
  });
  $('#about-btn').click(function(){
      $('#about').show();
  });
  $('#about-btn-2').click(function(){
    $('#about-2').show();
});
$('.carousel.carousel-slider').carousel({
  fullWidth: true
});
      
