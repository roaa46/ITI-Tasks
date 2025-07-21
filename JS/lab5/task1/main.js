var startStopBtn = document.getElementById("startStopBtn");
var resetBtn = document.getElementById("resetBtn");
var hourSpan = document.getElementById("hours");
var minuteSpan = document.getElementById("minutes");
var secondSpan = document.getElementById("seconds");
var milliSpan = document.getElementById("milliseconds");

var interval = null;
var elapsedTime = 0;
var running = false;

function updateTime() {
  var time = elapsedTime;
  var hrs = Math.floor(time / 3600000);
  var mins = Math.floor((time % 3600000) / 60000);
  var secs = Math.floor((time % 60000) / 1000);
  var ms = time % 1000;

  hourSpan.textContent = format(hrs, 2);
  minuteSpan.textContent = format(mins, 2);
  secondSpan.textContent = format(secs, 2);
  milliSpan.textContent = format(ms, 3);
}

function updateElapsedTime() {
  elapsedTime += 50;
  updateTime();
}

function switchStartStop() {
  if (!running) {
    running = true;
    startStopBtn.textContent = "Stop";
    interval = setInterval(updateElapsedTime, 50);
  } else {
    running = false;
    clearInterval(interval);
    startStopBtn.textContent = "Start";
  }
}

function resetTimer() {
  clearInterval(interval);
  elapsedTime = 0;
  updateTime();
  if (running) {
    interval = setInterval(updateElapsedTime, 50);
  }
}

function format(n, digits) {
  var str = "0000" + n;                   // n:5, digts: 2
  return str.substr(str.length - digits); // 0000 + 5 -> 05
}

startStopBtn.addEventListener("click", switchStartStop);
resetBtn.addEventListener("click", resetTimer);
