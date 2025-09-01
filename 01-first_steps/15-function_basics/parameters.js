// Parameters
function showMessage(from, text) {
    // parameters: from, text
    alert(from + ": " + text);
}

showMessage("Ann", "Hello!"); // Ann: Hello!
showMessage("Ann", "What's up?"); // Ann: What's up?

function showMessage(from, text) {
    from = "*" + from + "*"; // make "from" look nicer

    alert(from + ": " + text);
}

let from = "Ann";
showMessage(from, "Hello"); // *Ann*: Hello

// the value of "from" is the same, the function modified a local copy
alert(from); // Ann
