$(document).ready(function() {
  var enemies = [$('#0'), $('#1'), $('#2'), $('#3'), $('#4'), $('#5'), $('#6'), $('#7'), $('#8'), $('#9'), $('#10')];
  var enemy_hash = {};

  // var enemy_locations = function() {
  //   for(var i in enemies){
      

  //   }
  // }

  var did_enemy_hit = function(enemy){
      var enemy_x1 = enemy.offset().left;
      var enemy_x2 = enemy.offset().left + $('.board_coord').width();
      var enemy_y1 = enemy.offset().top;
      var enemy_y2 = enemy.offset().top + $('.board_coord').width() - 10;

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

  var hit_event = function(trajectory){
    for(var i = 0; i < enemies.length ; i++){
      if( did_enemy_hit(enemies[i]) ){
        $('#'+i).css('border', 'white');
        // enemies[i].fadeOut(100)
        $('.bullet').fadeOut(100);
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
        hit_event(trajectory);
      }, 5);

      setTimeout(function() {
        clearInterval(trajectory);
        $('.bullet').remove();
      }, 1500);
    }
  });
});