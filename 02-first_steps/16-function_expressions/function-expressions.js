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
