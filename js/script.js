let display = document.querySelector('#timerDisplay');
let workTime = 25*60;
let pauseTime = 5*60;

let pause=false;



function setTimerDisplay(time){
    minutes = parseInt(time / 60, 10);
    seconds = parseInt(time % 60, 10);
    if(minutes<10){
        minutes = "0"+minutes;
    }
    if(seconds<10){
        seconds = "0"+seconds;
    }
    display.textContent = minutes + ":" + seconds;
}

function startTimer() {
    if(pause){
        duration = pauseTime;
    }else{
        duration = workTime;
    }
    document.getElementById("start").style.display = "none";
    document.getElementById("reset").style.display = "block";
    let timer = duration-1;
    setTimerDisplay(timer);
    const interval = setInterval(function () {
        setTimerDisplay(timer);
        
        if (timer === 0) {
            clearInterval(interval);
            if(pause){
                reset();
            }else{
                pause = true;
                startTimer();
            }
        } else {
            timer--;
        }
    }, 1000);
}









window.onload = function () {
    setTimerDisplay(workTime);
    document.getElementById("reset").style.display = "none";
    document.getElementById("start").style.display = "block";
};


function reset(){
    location.reload();
}