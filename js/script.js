let display = document.querySelector('#timerDisplay');
let workTime = 25*60;
let cooldownTime = 5*60;



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

function startTimer(duration) {
    let timer = duration-1;
    setTimerDisplay(timer);
    const interval = setInterval(function () {
        setTimerDisplay(timer);
        
        if (timer === 0) {
            clearInterval(interval);
            display.textContent = "Time's up!";
        } else {
            timer--;
        }
    }, 1000);
}









window.onload = function () {
    var fiveMinutes = 60 * 5;
    setTimerDisplay(fiveMinutes);
    startTimer(fiveMinutes);
};
