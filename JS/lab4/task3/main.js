var successBtn = document.getElementById("successBtn");
var errorBtn = document.getElementById("errorBtn");
var alertBox = document.getElementById("alertBox");
var alertTitle = document.getElementById("alertTitle");
var alertImage = document.getElementById("alertImage");
var alertMessage = document.getElementById("alertMessage");

var successImg = "success.png";
var errorImg = "error.png";

function showSuccess() {
  alertBox.style.display = "block";
  alertTitle.innerText = "Success";
  alertMessage.innerText = "This is a Success Message";
  alertImage.setAttribute("src", successImg);
  alertTitle.className = "success";
  alertMessage.className = "success";
}

function showError() {
  alertBox.style.display = "block";
  alertTitle.innerText = "Error";
  alertMessage.innerText = "This is an Error Message";
  alertImage.setAttribute("src", errorImg);
  alertTitle.className = "error";
  alertMessage.className = "error";
}

successBtn.addEventListener("click" ,showSuccess);
errorBtn.addEventListener("click" ,showError);
