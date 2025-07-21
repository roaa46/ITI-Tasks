var input = document.getElementById("input");
function upperWords() {
  var words = input.value.split(" ");
  var result = [];

  for (var i = 0; i < words.length; i++) {
    var word = words[i].toLowerCase();
    if (word.length > 0) {
      var cap = word.charAt(0).toUpperCase() + word.slice(1);
      result.push(cap);
    } else {
      result.push("");
    }
  }

  document.getElementById("output").value = result.join(" ");
}

// the quiCk bRown    fox