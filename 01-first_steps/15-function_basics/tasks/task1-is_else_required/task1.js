let userAge = +prompt("Please enter your age: ", 19);

function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        // ...
        return confirm("Did parents allow you?");
    }
}
alert(checkAge(userAge));

// This is the same...
function checkAge(age) {
    if (age > 18) {
        return true;
    }
    // ...
    return confirm("Did parents allow you?");
}
alert(checkAge(userAge));
