var sound = new Howl({
    urls: ['song/background.mp3'],
    loop: true
  });

function loading() {
    $('body').css('height', $(window).height());
    $('#loading').css('visibility', 'visible');
    setTimeout('loadingVisible()', 1500);
}

function loadingVisible() {
    $('#loading').css('visibility', 'hidden');
    $('body').css({
        'overflow': 'visible',
        'height': '100%'
    });
    sound.play();
}