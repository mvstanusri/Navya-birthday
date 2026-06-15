function togglemusic(){
  let song = document.getElementById('birthdaysong');
  if(song.paused){
    song.play();
    
  document.querySelector('.heading').classList.add('glow');
  }
   else {
    song.pause();
    
  document.querySelector('.heading').classList.remove('glow');
  }

}