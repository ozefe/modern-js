// Function Expression vs Function Declaration
// Function Declaration
function sum(a, b) {
    return a + b;
}

// Function Expression
sum = function (a, b) {
    return a + b;
};

sayHi("John"); // Hello, John
function sayHi(name) {
    alert(`Hello, ${name}`);
}

// sayHi2("John"); // error!
let sayHi2 = function (name) {
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
