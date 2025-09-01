// Function Declaration:
function sayHi() {
    alert("Hello");
}
alert(sayHi); // shows the function code

// Function Expression:
sayHi = function () {
    alert("Hello");
};
alert(sayHi); // shows the function code

// (1.1) create
function sayHi() {
    alert("Hello");
}

// Or...
// (1.2) create
sayHi = function () {
    alert("Hello");
};

let func = sayHi; // (2) copy

func(); // Hello     // (3) run the copy (it works)!
sayHi(); // Hello    //     this still works too (why wouldn't it)

// Callback functions
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
// The arguments showOk and showCancel of ask are called callback functions or
// just callbacks. The idea is that we pass a function and expect it to be
// "called back" later if necessary.
ask("Do you agree?", showOk, showCancel);

// We can use Function Expressions to write an equivalent, shorter function:
ask(
    "Do you agree?",
    function () {
        alert("You agreed.");
    },
    function () {
        alert("You canceled the execution.");
    }
);

// Function Expression vs Function Declaration
// Function Declaration
function sum(a, b) {
    return a + b;
}

// Function Expression
sum = function (a, b) {
    return a + b;
};

sayHi2("John"); // Hello, John
function sayHi2(name) {
    alert(`Hello, ${name}`);
}

// sayHi3("John"); // error!
let sayHi3 = function (name) {
    alert(`Hello, ${name}`);
};

let age = prompt("What is your age?", 18);

// conditionally declare a function
if (age < 18) {
    function welcome() {
        alert("Hello!");
    }
} else {
    function welcome() {
        alert("Greetings!");
    }
}

// ...use it later
// welcome(); // Error: welcome is not defined

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

welcome =
    age < 18
        ? function () {
              alert("Hello!");
          }
        : function () {
              alert("Greetings!");
          };

welcome(); // ok now
