let play = document.getElementById('play');
let pause = document.getElementById('pause');
let like = document.getElementById('favourite');
let endTime = document.getElementById('end-time');
let startTime = document.getElementById('start-time');
let unlike = document.getElementsByClassName('fav');
let audioTime = document.getElementById('audio-time');
let currentSong = document.getElementById('current-song');


function addToFav(){
    if(like.classList.contains("fav")){
        like.classList.remove("fav")
    }else{
        like.classList.add("fav")
    }
}

function updateTime(){
    let val = audioTime.value;
    currentSong.currentTime = val;
}

function playSong(){
    currentSong.play();
    play.classList.add("not-active");
    pause.classList.remove("not-active");
    t = setInterval(() => {
        let time = currentSong.currentTime;
        let minutes = Math.floor(time/60);
        let seconds = Math.floor(time%60);
        startTime.innerHTML = minutes+":"+((seconds<10)?"0":"")+seconds;
        audioTime.stepUp(1);
    }, 1000);
}
// if(play.classList.contains("not-active")){
//     clearInterval(t);
// }
function pauseSong(){
    currentSong.pause();
    play.classList.remove("not-active");
    pause.classList.add("not-active");
    clearInterval(t);
    // audioTime.stepUp(0);
}
currentSong.oncanplay = function (){
    let minutes = Math.floor(currentSong.duration/60);
    let seconds = Math.ceil(currentSong.duration%60);
    endTime.innerHTML = minutes+":"+seconds;
    audioTime.setAttribute("max",Math.floor(currentSong.duration));
}



// calcDuration();
