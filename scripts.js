let progress = document.getElementById('progress');
let song = document.querySelector('.song');
let control = document.querySelector('.play-pause');
let moreOptions = document.querySelector('.more-opions');
let closeBtn = document.querySelector('.close-button');
let optionsIcon = document.querySelector('.hamburger');

song.onloadedmetadata = function() {
  progress.max = song.duration;
  progress.value = song.currentTime;
}

optionsIcon.addEventListener('click', () => {
  moreOptions.classList.add('active');
});
closeBtn.addEventListener('click', () => {
  moreOptions.classList.remove('active');
});


function playSong() {
  if (control.classList.contains("ri-play-fill")) {
    song.play();
    control.classList.remove("ri-play-fill");
    control.classList.add("ri-pause-fill");
  } else {
    song.pause();
    control.classList.add("ri-play-fill");
    control.classList.remove("ri-pause-fill");
  }
}

if (song.play) {
  setInterval(() => {
    progress.value = song.currentTime;
  }, 500);
}
progress.onchange = function () {
  song.play();
  control.classList.remove("ri-play-fill");
  control.classList.add("ri-pause-fill");
  song.currentTime = progress.value;
}