$('.icon_music').click(function(){
    $(this).toggleClass('on');
    // $('audio').fadeToggle();

    var audio = $('audio#music')[0];

    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }

    $('.wrap').toggleClass('on');
    $('.text_box').toggleClass('on');
})