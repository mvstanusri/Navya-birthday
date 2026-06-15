function togglemusic2(){
  let song = document.getElementById('doremonsong');
  if(song.paused){
    song.play();
  }
   else {
    song.pause();
  }
 

}