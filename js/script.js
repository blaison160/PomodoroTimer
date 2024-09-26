let display = document.querySelector('#timerDisplay');
let workTittle = document.getElementById('workTitle')
let breakTittle = document.getElementById('breakTitle')
let workTime = 25*60;
//test default time
workTime = 30;
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
    let timer;
    if(pause){
        timer = pauseTime;
    }else{
        timer = workTime;
    }
    document.getElementById("start").style.display = "none";
    document.getElementById("reset").style.display = "block";
    timer---1;
    setTimerDisplay(timer);
    const interval = setInterval(function () {
        setTimerDisplay(timer);
        
        if (timer === 0) {
            clearInterval(interval);
            if(pause){
                reset();
            }else{
                pause = true;
                workTitle.classList.remove('active');
                breakTitle.classList.add('active');
                startTimer();
            }
        } else {
            timer--;
        }
    }, 1000);
}









window.onload = function () {
    setTimerDisplay(workTime);
};


function reset(){
    location.reload();
}