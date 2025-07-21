var tbody = document.getElementById("tbody");
var fetchBtn = document.getElementById("fetchBtn");
var searchBtn = document.getElementById("searchBtn");
var searchId = document.getElementById("searchId");
var users = [];

function createCell(text) {
  var td = document.createElement("td");
  td.textContent = text;
  return td;
}

function createRow(user) {
  var row = document.createElement("tr");
  row.appendChild(createCell(user.id));

  var img = document.createElement("td");
  var newImg = document.createElement("img");
  newImg.src = "https://i.pravatar.cc/50?img=" + (user.id + 30);
  img.appendChild(newImg);
  row.appendChild(img);

  row.appendChild(createCell(user.name));
  row.appendChild(createCell(user.email));
  row.appendChild(createCell(user.username));

  var newAddress = user.address.street + ", " + user.address.city;
  var address = document.createElement("td");
  address.textContent = newAddress;
  row.appendChild(address);

  row.appendChild(createCell(user.phone));

  var website = document.createElement("td");
  var a = document.createElement("a");
  a.href = "http://" + user.website;
  a.textContent = user.website;
  a.target = "_blank";
  website.appendChild(a);
  row.appendChild(website);

  var actions = document.createElement("td");
  var viewBtn = document.createElement("button");
  viewBtn.textContent = "View";
  viewBtn.className = "actions-btn view-btn";
  var delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.className = "actions-btn delete-btn";

  viewBtn.addEventListener("click", function () {
    document.cookie =
      "user=" + encodeURIComponent(JSON.stringify(user)) + ";path=/";
    location.href = "user.html";
  });

  delBtn.addEventListener("click", function () {
    tbody.removeChild(row);
    for (var i = 0; i < users.length; i++) {
      if (users[i].id == user.id) {
        users.splice(i, 1);
        break;
      }
    }
  });
  actions.className = "action-cell";
  actions.appendChild(viewBtn);
  actions.appendChild(delBtn);
  row.appendChild(actions);

  tbody.appendChild(row);
}

function fetchAllUsers() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      users = JSON.parse(xhr.responseText);
      tbody.innerHTML = "";
      for (var i = 0; i < users.length; i++) {
        createRow(users[i]);
      }
    } else {
      console.log("Fetch error", xhr.status);
    }
  };
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
  xhr.send();
}

function searchUserById() {
  var id = searchId.value;
  if (!id) return;

  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      tbody.innerHTML = "";
      if (xhr.status == 200) {
        var user = JSON.parse(xhr.responseText);
        createRow(user);
      } else {
        alert("User not found");
      }
    }
  };
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users/" + id);
  xhr.send();
}

fetchBtn.addEventListener("click", fetchAllUsers);
searchBtn.addEventListener("click", searchUserById);
