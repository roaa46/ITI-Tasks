var sum = 0;
var input;
var n = prompt("Enter number of your numbers:");
do {
  input = prompt("Enter a number (0 to stop):");
  var num = Number(input);
  if (isNaN(num)) {
    alert("Please enter a numeric value.");
  } else {
    sum += num;
  }
} while (num !== 0 && sum <= 100);

document.writeln("Total sum = " + sum);
