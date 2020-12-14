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

(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();