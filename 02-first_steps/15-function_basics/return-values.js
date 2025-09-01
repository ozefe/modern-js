// Returning a value
function sum(a, b) {
    return a + b;
}

let result = sum(1, 2);
alert(result); // 3

function checkAge(age) {
    if (age >= 18) {
        return true;
    } else {
        return confirm("Do you have permission from your parents?");
    }
}

let age = prompt("How old are you?", 18);
if (checkAge(age)) {
    alert("Access granted");
} else {
    alert("Access denied");
}

function showMovie(age) {
    if (!checkAge(age)) {
        return;
    }

    alert("Showing you the movie");
    // ...
}

// A function with an empty return or without it returns undefined
function doNothing() {
    /* empty */
}
alert(doNothing() === undefined); // true

function doNothing() {
    return;
}
alert(doNothing() === undefined); // true
