var inputBox = document.getElementById("inputBox");
var circles = [
    document.getElementById("circle1"),
    document.getElementById("circle2"),
    document.getElementById("circle3")
];

inputBox.addEventListener("input", function () {
    var val = parseInt(inputBox.value);

    for (var i = 0; i < circles.length; i++) {
        circles[i].style.backgroundColor = "gray";
    }

    if (val === 1) {
        circles[0].style.backgroundColor = "red";
        inputBox.placeholder = "you entered : 1";
    } else if (val === 2) {
        circles[1].style.backgroundColor = "yellow";
        inputBox.placeholder = "you entered : 2";
    } else if (val === 3) {
        circles[2].style.backgroundColor = "blue";
        inputBox.placeholder = "you entered : 3";
    } else if (!isNaN(val)) {
        inputBox.placeholder = "you entered : " + val + " and isn't in range [1:3]";
    }

    inputBox.value = "";
});
