const msg = new SpeechSynthesisUtterance();

window.addEventListener('keyup', function(e){
    msg.text = e.key
    msg.lang ='th-TH';
    msg.rate = 1.2;
    msg.pitch = 1.2;
    speechSynthesis.speak(msg);
});