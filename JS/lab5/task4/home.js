function getCookie(element) {
  var cookieArr = document.cookie.split(";");

  for (var i = 0; i < cookieArr.length; i++) {
    var pair = cookieArr[i].split("=");
    if (element === pair[0].trim()) {
      return pair[1];
    }
  }
  return null;
}

window.onload = function () {
  var name = getCookie("name");
  var color = getCookie("color");
  var visits = parseInt(getCookie("visits") || "0");
  var gender = getCookie("gender");

  visits++;
  document.cookie = "visits=" + visits;

  var img = document.createElement("img");
  img.src = gender === "female" ? "images/female.png" : "images/male.png";
  img.width = 150;
  document.body.insertBefore(img, document.body.firstChild);

  var msg = document.getElementById("profileMessage");
  msg.innerHTML =
    "Welcome <span style='color:" +
    color +
    "; font-weight: bold;'>" +
    name +
    "</span> you Have visited this site <span style='color:" + color + "; font-weight: bold;'>" +
    visits +
    "</span> times :)";
};
