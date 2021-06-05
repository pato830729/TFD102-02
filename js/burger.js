$('.burger, .overlay').click(function(){
    $('.burger').toggleClass('clicked');
    $('.overlay').toggleClass('show');
    $('nav.burger_nav').toggleClass('show');
    $('body').toggleClass('overflow');
  });