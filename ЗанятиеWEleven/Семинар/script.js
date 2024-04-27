const video = document.querySelector('video');
const play = document.querySelector('.play');
const stopbtn = document.querySelector('.stop');
const pause = document.querySelector('.pause');
const mute = document.querySelector('.mute');
const seekBar = document.getElementById('seek-bar');

seekBar.addEventListener('input', function () {
    const time = video.duration * (seekBar.value / 100);
    video.currentTime = time;
});

video.addEventListener('timeupdate', function () {
    const value = (video.currentTime / video.duration) * 100;
    seekBar.value = value;
});

play.addEventListener('click', function () {
    video.play();
});

pause.addEventListener('click', function () {
    video.pause();
});

stopbtn.addEventListener('click', function () {
    video.pause();
    video.currentTime = 0;
});

mute.addEventListener('click', function () {
    if (video.muted) {
        video.muted = false;
    } else {
        video.muted = true;
    }
});

