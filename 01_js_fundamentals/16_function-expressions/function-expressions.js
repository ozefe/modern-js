function sayHi() {
    alert("Hello");
}

sayHi(); // "Hello"
alert(sayHi); // shows the function code

let func = sayHi;
func(); // "Hello"

let sayHi = function () {
    alert("Hello");
};

sayHi(); // "Hello"
alert(sayHi); // shows the function code

func = sayHi;
func(); // "Hello"

function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
}

function showOk() {
    alert("You agreed.");
}

function showCancel() {
    alert("You canceled the execution.");
}

// usage: functions showOk, showCancel are passed as arguments to ask
ask("Do you agree?", showOk, showCancel);

ask(
    "Do you agree?",
    function () {
        alert("You agreed.");
    },
    function () {
        alert("You canceled the execution.");
    }
);

// Function Declaration
function sum(a, b) {
    return a + b;
}

// Function Expression
let sum = function (a, b) {
    return a + b;
};

sayHiDec("John");
function sayHiDec(name) {
    alert(`Hello, ${name}`);
}

sayHiExpr("John"); // error!
let sayHiExpr = function (name) {
    alert(`Hello, ${name}`);
};

let age = prompt("What is your age?", 18);

// conditionally declare a function
if (age < 18) {
    welcome();
    function welcome() {
        alert("Hello!");
    }
    welcome();
} else {
    welcome();
    function welcome() {
        alert("Greetings!");
    }
    welcome();
}

// ...use it later
welcome(); // Error: welcome is not defined

let welcome;
if (age < 18) {
    welcome = function () {
        alert("Hello!");
    };
} else {
    welcome = function () {
        alert("Greetings!");
    };
}

welcome(); // ok now

age = prompt("What is your age?", 18);
let welcome =
    age < 18
        ? function () {
              alert("Hello!");
          }
        : function () {
              alert("Greetings!");
          };
welcome();
