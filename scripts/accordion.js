$(".article").click(function(event) {
  let text = $(this).find('.article-text')

  $(event.target.tagName).find('.article-text').not(this).fadeOut();
  
  text.fadeIn();
  text.css('transform' , 'none');
});