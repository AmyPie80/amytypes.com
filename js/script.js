$( document ).ready(function() {

  if ($(window).width() > $(window).height()) {
    $('.carousel').slick({
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear',
      autoplay: true,
      autoplaySpeed: 2000,
    });
  }

});