var tagNameInput = document.getElementById("tagNameInput");
var classNameInput = document.getElementById("classNameInput");
var idInput = document.getElementById("idInput");
var nameInput = document.getElementById("nameInput");

function countElements() {
    var tagName = tagNameInput.value;
    var className = classNameInput.value;
    var id = idInput.value;
    var name = nameInput.value;
    var result = "";

    if (tagName !== "") {
        var tags = document.getElementsByTagName(tagName);
        result += tagName + ": " + tags.length + "   ";
    }
    if (className !== "") {
        var classes = document.getElementsByClassName(className);
        result += className + ": " + classes.length + "   ";
    }
    if (id !== "") {
        var elementById = document.getElementById(id);
        result += id + ": " + (elementById ? "true" : "false") + "   ";
    }
    if (name !== "") {
        var names = document.getElementsByName(name);
        result += name + ": " + names.length;
    }
    document.getElementById("result").innerText = result;
}
