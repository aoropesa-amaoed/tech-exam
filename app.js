let currentMusic = 0;
const music = document.querySelector('#audio');
const songImage = document.querySelector('.img-song');
const seekBar = document.querySelector('.seek-bar');
const musicName = document.querySelector('.music-name');
const artistName = document.querySelector('.artist-name');
const currentTime = document.querySelector('.current-time');
const songDuration = document.querySelector('.song-duration');
const playButton = document.querySelector('.play-btn');
const forwardButton = document.querySelector('.fa-forward-step');
const backwardButton = document.querySelector('.fa-backward-step');



const formatTime = (time) => {
    let min = Math.floor(time / 60);
    if (min < 10) {
        min = `0${min}`;
    }
    let sec = Math.floor(time % 60);
    if (sec < 10) {
        sec = `0${sec}`;
    }
    return `${min}:${sec}`;
};
music.addEventListener('loadedmetadata', () => {
    seekBar.max = music.duration;
    songDuration.innerHTML = formatTime(music.duration);
});

setInterval(()=>{
    seekBar.value = music.currentTime;
    currentTime.innerHTML = formatTime(music.currentTime);
}, 500)
seekBar.addEventListener('change',()=>{
    music.currentTime = seekBar.value;
})

const playMusic =() =>{
    music.play();
    playButton.classList.remove('pause');
    songImage.classList.add('play')
    
}
//forward button
forwardButton.addEventListener('click',()=>{
    if(currentMusic >=songs.length -1){
        currentMusic= 0;
    }else{
        currentMusic++;
    }
    setMusic(currentMusic)
    playMusic();
})
//backward button
backwardButton.addEventListener('click',()=>{
    if(currentMusic >=songs.length -1){
        currentMusic= 0;
    }else{
        currentMusic--;
    }
    setMusic(currentMusic)
    playMusic();
})

playButton.addEventListener('click', () => {
    if (playButton.className.includes('pause')) {
        music.play();
    } else {
        music.pause();
    }
    playButton.classList.toggle('pause');
    songImage.classList.toggle('play');
});

const setMusic = (i) => {
    seekBar.value = 0; // Set range slide value to 0
    let song = songs[i];
    currentMusic = i;
    music.src = song.path;

    musicName.innerHTML = song.name;
    artistName.innerHTML = song.artist;
    songImage.style.backgroundImage = `url('${song.cover}')`;

    currentTime.innerHTML = '00:00';
    // songDuration.innerHTML = formatTime(music.duration);
    // seekBar.max = music.duration;
};

setMusic(0);







