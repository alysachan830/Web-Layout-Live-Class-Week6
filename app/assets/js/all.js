$(document).ready(() => {
  
  $(document).on('scroll', () => {
    if($(document).scrollTop() > 0){
      $('.js-navbar').addClass('shadow-sm');
      $('.js-navbar').addClass('sticky-top');
    }

    else{
      $('.js-navbar').removeClass('shadow-sm');
      $('.js-navbar').removeClass('sticky-top');
    }

  })

  $('.js-navbar-toggler').on('click', () => {
    $('.js-navbar-toggler__bar-middle').toggle();
    $('.js-navbar-toggler__bar-top').toggleClass('js-navbar-toggler__close--left');
    $('.js-navbar-toggler__bar-bottom').toggleClass('js-navbar-toggler__close--right');
  })

});