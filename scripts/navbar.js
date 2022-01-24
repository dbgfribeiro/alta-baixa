var navHeight = $('.nav').height();

$(document).scroll(function() {
  if ($(document).scrollTop() > 0) {
    $( ".nav" ).addClass( "nav-filled" );
  }
  else{
    $( ".nav" ).removeClass( "nav-filled" );
  }
});