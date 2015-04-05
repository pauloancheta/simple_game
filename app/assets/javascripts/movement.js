$(document).ready(function() {
  var enemies = [$('.left'), $('.right')];

  var spaceship_location = function(){
    console.log($('.spaceship').height());
    console.log($('.spaceship').offset());
  }

  var did_enemy_hit = function(enemy){
    var enemy_x1 = enemy.offset().left;
    var enemy_x2 = enemy.offset().left + $('.board_coord').width();
    var enemy_y1 = enemy.offset().top;
    var enemy_y2 = enemy.offset().top + $('.board_coord').width() - 10;

    var bullet_x1 = $('.bullet').offset().left;
    var bullet_x2 = $('.bullet').offset().left + $('.bullet').width();
    var bullet_y1 = $('.bullet').offset().top;
    var bullet_y2 = $('.bullet').offset().top + $('.bullet').width();

    enemy_hit = false

    if(bullet_x1 < enemy_x2 && bullet_x1 > enemy_x1){
      if(bullet_y1 < enemy_y2){
        return true
      }
    }
  }

  var hit_event = function(trajectory, enemies){
    for(var i = 0; i <=enemies.length; i++){
      if( enemies[i] && did_enemy_hit(enemies[i]) ){
        enemies[i].fadeOut(100)
        $('.bullet').fadeOut(100);
        clearInterval(trajectory);
        // create another bullet
        $('.spaceship center').append('<div class="bullet"></div>');
      }
    }
    
  }

  $(this).on('keydown', function(e){
    console.log(e.which);
    if(e.which == 37){
      $('.spaceship').css('margin-left', '-=10x');
    }
    else if(e.which == 39){
      $('.spaceship').css('margin-left', '+=10px');
    }

    else if(e.which == 32){
      var trajectory = setInterval(function() {
        $('.bullet').css('margin-top', '-=5px');
        hit_event(trajectory, enemies);
      }, 5);

      setTimeout(function() {
        clearInterval(trajectory);
        $('.bullet').remove();
        $('.spaceship center').append('<div class="bullet"></div>');
        spaceship_location();
      }, 1500);
    }
  });
});