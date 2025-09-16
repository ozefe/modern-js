// Once a method is passed somewhere separately from the object, `this` is lost.
// Here’s how it may happen with `setTimeout`:
let user = {
    firstName: "John",
    sayHi() {
        alert(`Hello, ${this.firstName}!`);
    },
};

// The output shows not `"John"` as `this.firstName`, but `undefined`! This is
// because `setTimeout` got the function `user.sayHi`, separately from the
// object.
setTimeout(user.sayHi, 1000); // Hello, undefined!

// The method `setTimeout` in-browser is a little special: it sets `this=window`
// for the function call (for Node.js, `this` becomes the timer object, but
// doesn't really matter here). So for `this.firstName` it tries to get
// `window.firstName`, which does not exist. In other similar cases, usually
// `this` just becomes `undefined`.
