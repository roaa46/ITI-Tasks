var input = document.getElementById("input");

function find() {
  var numbers = input.value.split(",");
  var unique = [];

  for (var i = 0; i < numbers.length; i++) {
    var num = Number(numbers[i]);
    if (!isNaN(num)) {
      var flag = false;
      for (var j = 0; j < unique.length; j++) {
        if (unique[j] == num) {
          flag = true;
          break;
        }
      }
      if (!flag) unique.push(num);
    }
  }
  if (unique.length < 2) {
    alert("Enter at least two unique numbers.");
    return;
  }
  var sorted = unique.sort(function (a, b) {
    return a - b;
  });
  // console.log(sorted);
  document.getElementById("secondMin").value = sorted[1];
  document.getElementById("secondMax").value = sorted[sorted.length - 2];
}
