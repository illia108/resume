$(function(){
  $(window).scroll(function() {
    if($(window).scrollTop() + $(window).height() == $(document).height()) {
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
