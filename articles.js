$.fn.commentCards = function(){

  return this.each(function(){

    var $this = $(this),
        $cards = $this.find('.article'),
        $current = $cards.filter('.article-current'),
        $next;

    $cards.on('click',function(){
      if ( !$current.is(this) ) {
        $cards.removeClass('article--current article--out article--next');
        $current.addClass('article--out');
        $current = $(this).addClass('article--current');
        $next = $current.next();
        $next = $next.length ? $next : $cards.first();
        $next.addClass('article--next');
      }
    });

    if ( !$current.length ) {
      $current = $cards.last();
      $cards.first().trigger('click');
    }

    $this.addClass('articles--active');

  })

};

$('.articles').commentCards();