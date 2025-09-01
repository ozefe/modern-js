// Function Declaration
function showMessage() {
    alert("Hello everyone!");
}

showMessage();
showMessage();

// Local variables
// A variable declared inside a function is only visible inside that function:
function showMessage() {
    let message = "Hello, I'm JavaScript!"; // local variable

    alert(message);
}

showMessage(); // Hello, I'm JavaScript!
// alert(message); // <-- Error! The variable is local to the function

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

// Default values
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

// Naming a function
// showMessage(..)     // shows a message
// getAge(..)          // returns the age (gets it somehow)
// calcSum(..)         // calculates a sum and returns the result
// createForm(..)      // creates a form (and usually returns it)
// checkPermission(..) // checks a permission, returns true/false

function showPrimes(n) {
    nextPrime: for (let i = 2; i < n; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j == 0) continue nextPrime;
        }

        alert(i); // a prime
    }
}

function showPrimes(n) {
    for (let i = 2; i < n; i++) {
        if (!isPrime(i)) continue;

        alert(i); // a prime
    }
}

function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) return false;
    }
    return true;
}
