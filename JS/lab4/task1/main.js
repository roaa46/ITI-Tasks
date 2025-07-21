var nameInput = document.getElementById("name");
var idInput = document.getElementById("id");
var ageInput = document.getElementById("age");
var tableBody = document.getElementById("tableBody");
function addStudent() {
  var name = nameInput.value.trim();
  var id = idInput.value.trim();
  var age = ageInput.value.trim();
  
  if (!validateInput(name, id, age)) {
    return;
  }

  var row = document.createElement("tr");

  var idCell = document.createElement("td");
  idCell.innerText = id;
  row.appendChild(idCell);

  var nameCell = document.createElement("td");
  nameCell.innerText = name;
  row.appendChild(nameCell);

  var ageCell = document.createElement("td");
  ageCell.innerText = age;
  row.appendChild(ageCell);

  var actionCell = document.createElement("td");
  var deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.className = "delete-btn";
  deleteBtn.onclick = function () {
    tableBody.removeChild(row);
  };
  actionCell.appendChild(deleteBtn);
  row.appendChild(actionCell);

  tableBody.appendChild(row);

  nameInput.value = "";
  idInput.value = "";
  ageInput.value = "";
}

function validateInput(name, id, age) {
  if (name.length < 3) {
    alert("Name must be at least 3 characters long.");
    return false;
  }

  if (isNaN(age) || Number(age) < 18) {
    alert("Age must be a number and 18 or above.");
    return false;
  }

  var rows = tableBody.getElementsByTagName("tr");
  for (var i = 0; i < rows.length; i++) {
    var lastId = rows[i].getElementsByTagName("td")[0].innerText;
    if (lastId === id) {
      alert("Please enter a unique ID.");
      return false;
    }
  }
  
  return true;
}
