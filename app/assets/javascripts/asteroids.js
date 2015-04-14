$(document).ready(function() {

  var move_enemies = function(){
    var move = setInterval(function(){
      $('table').css('margin-top', '+=5px');
      $('table').last().css('margin-top');
      if( $('table').last().height() <= 10 ){
        $('table').last().remove();
      }
      if( typeof($('table').last().css('margin-top')) !== "undefined" && 
          $('table').last().css('margin-top').replace("px", "") > 550 ){
        clearInterval(move);
        alert('DEAD!');
      }
    }, 2000);    
  }

  move_enemies();
});