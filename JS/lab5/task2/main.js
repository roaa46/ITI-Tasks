var circles = [
  document.getElementById("circle1"),
  document.getElementById("circle2"),
  document.getElementById("circle3")
];

var colors = ["red", "yellow", "green"];
var current = 0;
var intervalId = null;
var stopAt = null;
var stopped = false;

function turnCircleOn(index) {
  for (var i = 0; i < circles.length; i++) {
    circles[i].style.backgroundColor = "gray";
  }
  circles[index].style.backgroundColor = colors[index];
}

function startCircle() {
  intervalId = setInterval(function () {
    if (stopped) return;

    turnCircleOn(current);

    if (stopAt !== null && current === stopAt) {
      clearInterval(intervalId);
      stopAt = null;
      stopped = true;
      return;
    }

    current = (current + 1) % circles.length;
  }, 1000);
}

function resumeCircle() {
  if (!stopped) return;
  stopped = false;
  startCircle();
}

function handleMouseOver(e) {
  for (var i = 0; i < circles.length; i++) {
    if (e.target === circles[i]) {
      if (i === current) {
        clearInterval(intervalId);
        stopped = true;
        stopAt = null;
      } else {
        stopAt = i;
      }
    }
  }
}

function handleMouseOut(e) {
  resumeCircle();
}

for (var i = 0; i < circles.length; i++) {
  circles[i].addEventListener("mouseover", handleMouseOver, false);
  circles[i].addEventListener("mouseout", handleMouseOut, false);
}

startCircle();
