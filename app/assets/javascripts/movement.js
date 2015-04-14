$(document).ready(function() {
  var enemies = [$('#0'), $('#1'), $('#2'), $('#3'), $('#4'), $('#5'), $('#6'), $('#7'), $('#8'), $('#9'), $('#10')];
  var enemy_hash = {};


  var random_enemies = function(){
    var x = Math.random() * 10;
    return( "<table> </table>" );
  }

  var append_enemies = function(){
    setInterval(function(){
      $('board').prepend();
    });
  }

  var move_enemies = function(){
    var move = setInterval(function(){
      $('table').css('margin-top', '+=10px');
      
      if($('table').offset().top >= 600){
        if( $('table').height() <= 10 ){
          clearInterval(move);
          $('table').remove();
        }
        else{
          clearInterval(move);
          alert('youre dead!');
        }
      }
    }, 300);    
  }
  
  move_enemies();

  var clear_bullet = function(trajectory){
    var bullet_top = $('.bullet').offset().top;
    if(bullet_top && bullet_top <= 19){
      clearInterval(trajectory);
      $('.bullet').remove();
    }
  }

  var did_enemy_hit = function(enemy){
      if(typeof(enemy.offset()) !== "undefined" && typeof($('.bullet').offset()) !== "undefined"){
        var enemy_x1 = enemy.offset().left;
        var enemy_x2 = enemy.offset().left + $('.enemy').width();
        var enemy_y1 = enemy.offset().top;
        var enemy_y2 = enemy.offset().top + $('.enemy').width() - 10;

        var bullet_x1 = $('.bullet').offset().left;
        var bullet_x2 = $('.bullet').offset().left + $('.bullet').width();
        var bullet_y1 = $('.bullet').offset().top;
        var bullet_y2 = $('.bullet').offset().top + $('.bullet').width();  

        if(bullet_x1 < enemy_x2 && bullet_x1 > enemy_x1){
          if(bullet_y1 < enemy_y2){
            return true;          
          }
        }
      }
      else{
        return false
      }
  }

  var hit_event = function(trajectory){
    for(var i = 0; i < enemies.length ; i++){
      if( did_enemy_hit(enemies[i]) ){
        enemies[i].remove();
        $('.bullet').remove();
        clearInterval(trajectory);
      }
    }
  }

  $(this).on('keydown', function(e){
    var left = 37,
        right = 39,
        space = 32;
    console.log(e.which);
    if(e.which == left){
      $('.spaceship').css('margin-left', '-=10x');
    }
    else if(e.which == right){
      $('.spaceship').css('margin-left', '+=10px');
    }

    else if(e.which == space){
      $('.spaceship center').append('<div class="bullet"></div>');
      var trajectory = setInterval(function() {   
        $('.bullet').css('margin-top', '-=5px');
        clear_bullet(trajectory);
        hit_event(trajectory);
      }, 5);
    }
  });
});