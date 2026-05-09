function playMusic() {
  const music = document.getElementById("bgMusic");

  music.play();
}

/* Surprise Message */

function showMessage() {

  const message = document.getElementById("hiddenMessage");

  if (message.style.display === "block") {

    message.style.display = "none";

  } else {

    message.style.display = "block";

  }

}
function playMusic(id){

  // saare songs band karo
  let songs = document.querySelectorAll("audio");

  songs.forEach(song => {
    song.pause();
    song.currentTime = 0;
  });

  // jis button pe click hua wahi song play karo
  let currentSong = document.getElementById(id);

  currentSong.play();
}