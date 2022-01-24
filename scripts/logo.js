$(document).ready(function () {
  var $horizontal = $('#logo img:last-child');
  var $static = $('#logo img:nth-child(2)');
  var initial = $static.width() + 18;
  var speed = 14;

  $horizontal.css({
    'left': initial,
  });
  $(window).scroll(function () {
      var st = $(this).scrollTop();
      var newPos = (st * (speed/100)) + initial;
      $horizontal.css({
          'left': newPos
      });
  });
});