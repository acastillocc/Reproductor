const audio = document.getElementById("cancion");
const play = document.getElementById("play");
const pause = document.getElementById("pause");

play.addEventListener("click",function(){

    audio.play();
    this.classList.add("hide");
    pause.classList.remove("hide");
})

pause.addEventListener("click",function(){
    audio.pause();
    this.classList.add("hide");
    play.classList.remove("hide");
})