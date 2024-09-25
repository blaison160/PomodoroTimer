// Javascript code written by robbmj, edited by jlo
// at https://stackoverflow.com/questions/20618355/how-to-write-a-countdown-timer-in-javascript
//
// function startTimer(duration, display) {
//     var timer = duration, minutes, seconds;
//     setInterval(function () {
//         minutes = parseInt(timer / 60, 10);
//         seconds = parseInt(timer % 60, 10);
// 
//         minutes = minutes < 10 ? "0" + minutes : minutes;
//         seconds = seconds < 10 ? "0" + seconds : seconds;
// 
//         display.textContent = minutes + ":" + seconds;
// 
//         if (--timer < 0) {
//             timer = duration;
//         }
//     }, 1000);
// }
// 
// window.onload = function () {
//     var fiveMinutes = 60 * 5,
//         display = document.querySelector('#time');
//     startTimer(fiveMinutes, display);
// };
// -HTML part-
// <body>
//     <div>Registration closes in <span id="time">05:00</span> minutes!</div>
// </body>
