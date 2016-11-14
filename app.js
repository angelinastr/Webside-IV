$(document).ready(function() {
  $('.button-6').on('click', function() {
    $('.circle').addClass('flip')
  })

  $('.circle').on('animationend', function() {
    $('.circle').removeClass('flip')
  })


})
