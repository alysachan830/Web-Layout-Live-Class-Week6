$(document).ready(() => {
  
  $(document).on('scroll', () => {
    if($(document).scrollTop() > 0){
      $('.js-navbar-bg').addClass('bg-gray-100');
      $('.js-navbar-bg').removeClass('bg-white');
      $('.js-navbar-bg').addClass('fixed-top');
    }

    else{
      $('.js-navbar-bg').addClass('bg-white');
      $('.js-navbar-bg').removeClass('bg-gray-100');
      $('.js-navbar-bg').removeClass('fixed-top');
    }

  })

  $('.js-navbar-toggler').on('click', () => {
    $('.js-navbar-toggler__bar-middle').toggle();
    $('.js-navbar-toggler__bar-top').toggleClass('js-navbar-toggler__close--left');
    $('.js-navbar-toggler__bar-bottom').toggleClass('js-navbar-toggler__close--right');
  })

});