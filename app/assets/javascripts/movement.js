$(document).ready(function() {
  var enemies = [];
  var enemy_id = 0;

  for(var i = 0; i < 10; i++){
    enemies.push( $('#' + i) );
  }

  // var random_enemies = function(){
  //   var enemyRow = ""
  //   for(var i = 0; i < 5; i++){
  //     var x = Math.floor(Math.random() *10);
  //     if(x < 5){
  //       enemyRow = enemyRow + '<td></td>';
  //     }
  //     else{
  //       enemyRow = enemyRow + '<td><div class="enemy" id="'+ enemy_id + '"></div></td>';
  //       enemies[enemy_id] = ($( '#'+ enemy_id ));
  //       enemy_id = enemy_id + 1;
  //     }

  //   }
  //   console.log(enemies[0]);
  //   return enemyRow;
  // }

  // var append_enemies = function(){
  //   var count = 0;
  //   var new_enemy_row = setInterval(function(){
  //     count +=1
  //     var new_enemy = random_enemies();
  //     $('.board').prepend('<table><tr>' + random_enemies() + '</tr></table>');

  //     if(count == 2){
  //       clearInterval(new_enemy_row);
  //     }
  //   }, 5000);


  // }

  // append_enemies();

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
    for(var i in enemies){
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
        $('.bullet').css('margin-top', '-=10px');
        clear_bullet(trajectory);
        hit_event(trajectory);
      }, 5);
    }
  });
});