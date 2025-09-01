// Default values
function showMessage(from, text) {
    from = "*" + from + "*"; // make "from" look nicer

    alert(from + ": " + text);
}
showMessage("Ann"); // *Ann*: undefined

function showMessage(from, text = "no text given") {
    alert(from + ": " + text);
}

showMessage("Ann"); // Ann: no text given
showMessage("Ann", undefined); // Ann: no text given

// function showMessage(from, text = anotherFunction()) {
//     // anotherFunction() only executed if no text given
//     // its result becomes the value of text
// }
