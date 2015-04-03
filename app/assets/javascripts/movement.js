$(document).ready(function() {
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
        $('.bullet').css('margin-top', '-=10px');
      }, 5);

      setTimeout(function() {
        clearInterval(trajectory);
        $('.bullet').remove();
        $('.spaceship center').append('<div class="bullet"></div>')
      }, 1000);
    }
  });
});