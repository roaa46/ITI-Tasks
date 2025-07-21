var input = prompt("Enter a string to check it");
var caseSensitive = confirm("Do you want to consider case sensitivity?");

// var original = caseSensitive ? input : input.toLowerCase();

var original;
if (caseSensitive) {
    original = input;
} else {
    original = input.toLowerCase();
}
var isPalindrome = true;
for (var i = 0; i < original.length / 2; i++) {
    if (original[i] !== original[original.length - 1 - i]) {
        isPalindrome = false;
        break;
    }
}
if (isPalindrome) {
    document.writeln("It is a palindrome.");
} else {
    document.writeln("It is NOT a palindrome.");
}
