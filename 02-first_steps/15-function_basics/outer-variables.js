// Outer variables
// A function can access an outer variable as well:
let userName = "John";

function showMessage() {
    let message = "Hello, " + userName;
    alert(message);
}
showMessage(); // Hello, John

function showMessage() {
    userName = "Bob"; // (1) changed the outer variable

    let message = "Hello, " + userName;
    alert(message);
}

alert(userName); // John before the function call
showMessage();
alert(userName); // Bob, the value was modified by the function

userName = "John";
function showMessage() {
    let userName = "Bob"; // declare a local variable

    let message = "Hello, " + userName; // Bob
    alert(message);
}

// the function will create and use its own userName
showMessage();

// John, unchanged, the function did not access the outer variable
alert(userName);
