$(document).ready(() => {
  
  $(document).on('scroll', () => {
    if($(document).scrollTop() > 0){
      $('#navbar').addClass('bg-gray-100')
      $('#navbar').removeClass('bg-white')
    }

    else{
      $('#navbar').addClass('bg-white')
      $('#navbar').removeClass('bg-gray-100')
    }

  })
});