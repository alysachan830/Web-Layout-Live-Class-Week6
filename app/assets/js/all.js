$(document).ready(() => {

  /* Add bottom shadow to navbar when scrolling*/
  
  $(document).on('scroll', () => {
    if($(document).scrollTop() > 0){
      $('.js-navbar').addClass('shadow-sm');
    }

    else{
      $('.js-navbar').removeClass('shadow-sm');
    }

  })

  /* Navbar cancel button in mobile version*/

  $('.js-navbar-toggler').on('click', () => {
    $('.js-navbar-toggler__bar-middle').toggle();
    $('.js-navbar-toggler__bar-top').toggleClass('js-navbar-toggler__close--left');
    $('.js-navbar-toggler__bar-bottom').toggleClass('js-navbar-toggler__close--right');
  })

});