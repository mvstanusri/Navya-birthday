function togglemusic3(){
  let song = document.getElementById('plb');
  if(song.paused){
    song.play();
  }
   else {
    song.pause();
  }
  document.querySelector('.heading').classList.add('glow');

}