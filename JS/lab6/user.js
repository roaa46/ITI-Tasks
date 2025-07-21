function getCookieValue(name) {
  var pairs = document.cookie.split(";");
  for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i].trim().split("=");
    if (pair[0] === name) {
      return decodeURIComponent(pair[1]);
    }
  }
  return null;
}

var data = getCookieValue("user");
if (data) {
  try {
    var user = JSON.parse(data);
    document.getElementById("userId").textContent = user.id;
    document.getElementById("userName").textContent = user.name;
    document.getElementById("userEmail").textContent = user.email;
    document.getElementById("userUsername").textContent = user.username;
    document.getElementById("userAddress").textContent = user.address.street + ", " + user.address.city;
    document.getElementById("userPhone").textContent = user.phone;

    var websiteLink = document.getElementById("userWebsite");
    websiteLink.href = "http://" + user.website;
    websiteLink.textContent = user.website;

    document.getElementById("userImg").src =
      "https://i.pravatar.cc/100?img=" + (user.id + 30);
  } catch (e) {
    document.getElementById("userCard").innerHTML =
      "<b>Error loading user data.</b>";
  }
} else {
  document.getElementById("userCard").innerHTML =
    "<b>No user data found in cookies.</b>";
}
