cancion = document.createElement("audio");




function update(){
    if (cancion.onclick){
        cancion.play();
        console.log("REPRODUCIENDO");
    } else {
        cancion.pause();
        console.log("PAUSADO");
    }
    
}