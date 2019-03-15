
function playSound(e){
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    let key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    //ako ne ostoji zvuk vezan za dirku onda stopiras func
    if(!audio) return;
    // da moze da pusti ton bez obzira da ga je zavrsio do kraja premota na pocetak
    audio.currentTime = 0;
    key.classList.add('playing');
    
    audio.play();
}


function removeTransiton(e){
    if(e.propertyName != "transform") return;
    this.classList.remove('playing');
    
}
let keys = document.querySelectorAll('.key');

keys.forEach(key => key.addEventListener("transitionend", removeTransiton));

window.addEventListener('keydown', playSound);