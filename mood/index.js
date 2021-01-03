var calm_music = document.getElementById("load_audio");
function load(){
    console.log("loaded" + calm_music);
    calm_music.addEventListener("mousemove",calm_music.play());
}
function play_music(){
    if(calm_music.paused){
        calm_music.play();
    }
    else {
        calm_music.pause();
    }
}
function pos(){
    console.log(calm_music);
    calm_music.play();
}
