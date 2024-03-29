function toggleFullScreen() {  
    if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement) {
        if (document.documentElement.requestFullscreen)
            document.documentElement.requestFullscreen();
        else if (document.documentElement.mozRequestFullScreen)
            document.documentElement.mozRequestFullScreen();
        else if (document.documentElement.webkitRequestFullscreen)
            document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);

    } else {
        if (document.cancelFullScreen)
            document.cancelFullScreen();
        else if (document.mozCancelFullScreen)
            document.mozCancelFullScreen();
        else if (document.webkitCancelFullScreen)
            document.webkitCancelFullScreen();
    }
}

addEventListener('fullscreenchange', (e) => {
    if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement){
        document.getElementById('fullscreen').style.opacity = 0.8;
        document.getElementById('yt').style.opacity = 0.8;
    }
    else{
        document.getElementById('fullscreen').style.opacity = 0.1;
        document.getElementById('yt').style.opacity = 0.1;
    }
});
