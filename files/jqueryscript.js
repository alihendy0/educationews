$(window).on('scroll', function() {
  if ($(window).scrollTop())
  {
    $('header').addClass('resize');
  }
  else
  {
    $('header').removeClass('resize');
  }
})