// create an audio object to be able to call play on...

var audioSounds = ["cAudio", "dAudio", "eAudio", "fAudio", "gAudio", "aAudio", "bAudio"];
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
