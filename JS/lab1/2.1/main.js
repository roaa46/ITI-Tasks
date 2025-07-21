var input = prompt("enter string");

var count = 0;
for (var i = 0; i < input.length; i++) {
  if (input[i] == "e") count++;
}

document.writeln(count);
