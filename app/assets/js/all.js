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

// form validation

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