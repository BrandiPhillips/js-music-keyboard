
// When cnote is clicked cAudio is played...

$(document).ready( function() {
  $('.instrument').on('click', 'button', function(event){
    if ($(this).html() === 'c'){
      $('#cAudio')[0].play();
    } else if ($(this).html() === 'd'){
      $('#dAudio')[0].play();
    } else if ($(this).html() === 'e'){
      $('#eAudio')[0].play();
    } else if ($(this).html() === 'f'){
      $('#fAudio')[0].play();
    } else if ($(this).html() === 'g'){
      $('#gAudio')[0].play();
    } else if ($(this).html() === 'a'){
      $('#aAudio')[0].play();
    } else if ($(this).html() === 'b'){
      $('#bAudio')[0].play();
    }
  });
});

// when corresponding keys are pressed, audio is played:
$(document).ready(function() {
  $('body').keydown(function(event){
    if (event.key == 'c'){
      $('#cAudio')[0].play();
    } else if (event.key == 'd'){
        $('#dAudio')[0].play();
    } else if (event.key == 'e'){
        $('#eAudio')[0].play();
    } else if (event.key == 'f'){
        $('#fAudio')[0].play();
    } else if (event.key == 'g'){
        $('#gAudio')[0].play();
    } else if (event.key == 'a'){
        $('#aAudio')[0].play();
    } else if (event.key == 'b'){
        $('#bAudio')[0].play();
    }
  });
});
