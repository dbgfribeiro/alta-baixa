var navHeight = $('#nav').height();

var home = $('#home').offset().top;
var intro = $('#intro').offset().top - navHeight/2;
var index = $('#index').offset().top - navHeight/2;
var authors = $('#authors').offset().top - navHeight/2;

$(document).scroll(function() {
  var scrollPos = $(document).scrollTop();
  if (scrollPos >= home && scrollPos < intro) {
    $('#nav *').css('filter', 'none');
  }
  else if (scrollPos >= intro && scrollPos < index) {
    $('#nav img').css('filter', 'brightness(0)');
    $('#nav li').css('filter', 'invert(1)');
  }
  else if (scrollPos >= index && scrollPos < authors) {
    $('#nav img').css('filter', 'brightness(0)');
    $('#nav li').css('filter', 'invert(1)');
  }
  else if (scrollPos >= authors) {
    $('#nav *').css('filter', 'none');
  }
});