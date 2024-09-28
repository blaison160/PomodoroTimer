let display = document.querySelector('#timerDisplay');
let workTittle = document.getElementById('workTitle');
let breakTittle = document.getElementById('breakTitle');
let outerCircle = document.getElementsByClassName('timer')[0];
let innerCircle = document.getElementsByClassName('circle')[0];
let workTime = 25*60;
//test default time
//workTime = 30;
let pauseTime = 5*60;

let pause=false;



function setTimerDisplay(time){
    //convert stored time to mm:ss format for display
    minutes = parseInt(time / 60, 10);
    seconds = parseInt(time % 60, 10);
    if(minutes<10){
        minutes = "0"+minutes;
        //better time display that does not make the timer 
        //switch from 4 digits to 3 digits (better for the eyes)
    }
    if(seconds<10){
        seconds = "0"+seconds;
        //same here for the seconds
    }
    display.textContent = minutes + ":" + seconds;
}

function startTimer() {
    let timer;
    if(pause){
        timer = pauseTime;
        outerCircle.classList.add('break');
        innerCircle.classList.add('break');
    }else{
        timer = workTime;
        outerCircle.classList.remove('break');
        innerCircle.classList.remove('break');
    }
    document.getElementById("startButton").style.display = "none";
    document.getElementById("settingsButton").style.display = "none";
    document.getElementById("resetButton").style.display = "block";
    timer--;
    const interval = setInterval(function () {
        setTimerDisplay(timer);
        
        if (timer === 0) {
            clearInterval(interval);
            if(pause){
                pause = false;
                breakTitle.classList.remove('active');
                workTitle.classList.add('active');
                startTimer();
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

function openSettings() {
            document.getElementById('settings').style.display = 'block';
        }

        function closeSettings() {
            document.getElementById('settings').style.display = 'none';
        }

        // Save settings when the form is submitted
        function saveSettings(event) {
            event.preventDefault(); // Prevent the form from submitting/reloading the page
            const newWorkTime = document.getElementById('workTimeInput').value*60;
            const newBreakTime = document.getElementById('breakTimeInput').value*60;
            workTime = parseInt(newWorkTime, 10); // Update work time with user input
            pauseTime = parseInt(newBreakTime, 10); // Update break time with user input
            closeSettings();
            setTimerDisplay(workTime); // Update displayed time
        }


window.onload = function () {
    setTimerDisplay(workTime);
};


function reset(){
    location.reload();
}