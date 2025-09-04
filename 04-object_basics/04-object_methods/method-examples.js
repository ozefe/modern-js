// In the real world, a user can act: select something from the shopping cart,
// login, logout etc. Actions are represented in JavaScript by functions in
// properties.
let user = {
    name: "John",
    age: 30,
};

// A function that is a property of an object is called its method.
user.sayHi = function () {
    alert("Hello!");
};
user.sayHi(); // Hello!

// There exists a shorter syntax for methods in an object literal:
user = {
    sayHi: function () {
        alert("Hello");
    },
};
user.sayHi();

// or...
user = {
    sayHi() {
        // same as "sayHi: function(){...}"
        alert("Hello");
    },
};
user.sayHi();
