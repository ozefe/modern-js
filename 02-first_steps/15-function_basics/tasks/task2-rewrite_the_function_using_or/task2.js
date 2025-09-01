let userAge = +prompt("Please enter your age: ", 19);

function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return confirm("Did parents allow you?");
    }
}
alert(checkAge(userAge));

function checkAge(age) {
    return age > 18 ? true : confirm("Did parents allow you?");
}
alert(checkAge(userAge));

function checkAge(age) {
    return age > 18 || confirm("Did parents allow you?");
}
alert(checkAge(userAge));
