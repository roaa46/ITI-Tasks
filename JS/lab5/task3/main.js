var images = ["images/img1.jpg", "images/img2.jpg", "images/img3.jpg", "images/img4.jpg"];
var current = 0;
var intervalId = null;
var imageElement = document.getElementById("slideImage");

function showImage(index) {
  imageElement.src = images[index];
}

var playBtn = document.getElementById("play");
var stopBtn = document.getElementById("stop");
var nextBtn = document.getElementById("next");
var prevBtn = document.getElementById("prev");

function play() {
  if (intervalId == null) {
    intervalId = setInterval(function () {
      current = (current + 1) % images.length;
      showImage(current);
    }, 1000);
  }
}

function stop() {
  clearInterval(intervalId);
  intervalId = null;
}

function nextImage(e) {
  current = (current + 1) % images.length;
  showImage(current);
}

function prevImage(e) {
  current = (current - 1 + images.length) % images.length;
  showImage(current);
}

playBtn.addEventListener("click", play);
stopBtn.addEventListener("click", stop);
nextBtn.addEventListener("click", nextImage);
prevBtn.addEventListener("click", prevImage);
