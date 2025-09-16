{
    let user = {
        firstName: "John",
        sayHi() {
            alert(`Hello, ${this.firstName}!`);
        },
    };

    // Now it works, because it receives `user` from the outer lexical environment,
    // and then calls the method normally.
    setTimeout(function () {
        user.sayHi(); // Hello, John!
    }, 1000);

    // Same thing:
    setTimeout(() => user.sayHi(), 1000); // Hello, John!
}

// Looks fine, but a slight vulnerability appears in our code structure. What if
// before `setTimeout` triggers (there's one second delay!) `user` changes
// value? Then, suddenly, it will call the wrong object!
let user = {
    firstName: "John",
    sayHi() {
        alert(`Hello, ${this.firstName}!`);
    },
};

setTimeout(() => user.sayHi(), 1000); // Another user in setTimeout!

// ...the value of `user` changes within 1 second
user = {
    sayHi() {
        alert("Another user in setTimeout!");
    },
};
