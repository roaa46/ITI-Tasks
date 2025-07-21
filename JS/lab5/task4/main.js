var form = document.getElementById("registerForm");
var nameInput = document.getElementById("name");
// var ageInput = document.getElementById("age");
var genderElems = document.getElementsByName("gender");
var colorInput = document.getElementById("color");

window.onload = function () {
  form.onsubmit = function (e) {
    e.preventDefault();

    var name = nameInput.value;
    // var age = ageInput.value;
    var color = colorInput.value;

    var gender;
    for (var i = 0; i < genderElems.length; i++) {
      if (genderElems[i].checked) {
        gender = genderElems[i].value;
        break;
      }
    }

    document.cookie = "name=" + name;
    document.cookie = "color=" + color;
    document.cookie = "gender=" + gender;
    document.cookie = "visits=0";

    location.href = "home.html";
  };
};
