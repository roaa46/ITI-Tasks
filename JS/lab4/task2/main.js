var form = document.getElementById("validationForm");
var nameInput = document.getElementById("name");
var passInput = document.getElementById("pass");
var emailInput = document.getElementById("email");
var nameError = document.getElementById("nameError");
var passError = document.getElementById("passError");
var emailError = document.getElementById("emailError");
var genderError = document.getElementById("genderError");
var sportError = document.getElementById("sportError");

function validateName() {
  var name = nameInput.value.trim();
  if (name.length <= 4) {
    nameError.textContent = "name length must be > 4 letters";
    nameInput.classList.add("invalid");
    return false;
  } else {
    nameError.textContent = "";
    nameInput.classList.remove("invalid");
    return true;
  }
}

function validatePassword() {
  var pass = passInput.value.trim();
  if (pass.length <= 8) {
    passError.textContent = "pass length must be > 8 letters";
    passInput.classList.add("invalid");
    return false;
  } else {
    passError.textContent = "";
    passInput.classList.remove("invalid");
    return true;
  }
}

function validateEmail() {
  var email = emailInput.value.trim();
  var emailPattern = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(email)) {
    emailError.textContent = "mail not valid";
    emailInput.classList.add("invalid");
    return false;
  } else {
    emailError.textContent = "";
    emailInput.classList.remove("invalid");
    return true;
  }
}

function validateGender() {
  var genderInputs = document.getElementsByName("gender");
  for (var i = 0; i < genderInputs.length; i++) {
    if (genderInputs[i].checked) {
      genderError.textContent = "";
      return true;
    }
  }
  genderError.textContent = "choose your gender";
  return false;
}

function validateSport() {
  var sportInputs = document.getElementsByName("sport");
  for (var i = 0; i < sportInputs.length; i++) {
    if (sportInputs[i].checked) {
      sportError.textContent = "";
      return true;
    }
  }
  sportError.textContent = "choose your sport";
  return false;
}

nameInput.addEventListener("input", validateName);
passInput.addEventListener("input", validatePassword);
emailInput.addEventListener("input", validateEmail);

form.addEventListener("submit", function (e) {
  e.preventDefault();
  var valid = true;

  if (!validateName() || !validatePassword() || !validateEmail() || !validateGender() || !validateSport())
    valid = false;

  if (valid) {
    alert("Form Submitted Successfully!");
  }
});

document.getElementById("resetBtn").addEventListener("click", function () {
  nameError.textContent = "";
  passError.textContent = "";
  emailError.textContent = "";
  genderError.textContent = "";
  sportError.textContent = "";

  nameInput.classList.remove("invalid");
  passInput.classList.remove("invalid");
  emailInput.classList.remove("invalid");
});
