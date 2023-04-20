$(document).ready(function(){
  var cardOnTop = 2;
  
  $(".red-card").click(function(e){
    e.preventDefault();

    var visible = false;

    if ($(this).hasClass("show")) {
      visible = true
    }

    if ($(".entrata-cards").hasClass("showing")) {

      $(".red-card.show")
        .removeClass("show");

      if (visible) {

        $(".entrata-cards")
          .removeClass("showing");
      } else {

        $(this)
          .css({zIndex: cardOnTop})
          .addClass("show");
      }

      cardOnTop++;

    } else {

      $(".entrata-cards")
        .addClass("showing");
      $(this)
        .css({zIndex:cardOnTop})
        .addClass("show");

      cardOnTop++;
    }
    
  });
});