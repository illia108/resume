$(function(){
  $(window).scroll(function() {
    var scrollHeight = $(document).height();
	var scrollPosition = $(window).height() + $(window).scrollTop();
//     console.log('scrollHeight: ' + scrollHeight);
//     console.log('scrollPosition: ' + scrollPosition);
     console.log('(scrollHeight - scrollPosition) / scrollHeight: ' + (scrollHeight - scrollPosition) / scrollHeight);
	if ((scrollHeight - scrollPosition) / scrollHeight < 0) {
     
      showLevels();
    }
});
  
});

function showLevels() {
  $('.level-bar-inner').each(function() {
    var itemWidth = $(this).data('level');
    $(this).animate({
        width: itemWidth
    }, 800);
  });
}
