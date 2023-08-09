$(window).scroll(function() {
    if ($(window).scrollTop() >= 50) {
      $('nav').addClass('navColorFadeIn');
      $('nav').removeClass('navColorFadeout');
    } else {
        $('nav').addClass('navColorFadeout');
        $('nav').removeClass('navColorFadeIn');
    }
  });