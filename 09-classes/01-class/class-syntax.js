// The basic syntax is:
class MyClass {
    // class methods

    // The `constructor()` method is called automatically by `new`, so we can
    // initialize the object there.
    constructor() {
        /* ... */
    }

    method1() {
        /* ... */
    }
    method2() {
        /* ... */
    }
    method3() {
        /* ... */
    }

    // ...
}
// Then use `new MyClass()` to create a new object with all the listed methods.

class User {
    constructor(name) {
        this.name = name;
    }

    sayHi() {
        alert(this.name);
    }
}

// Usage:
// When `new User("John")` is called:
// 1. A new object is created.
// 2. The `constructor` runs with the given argument and assigns it to
//    `this.name`.
let user = new User("John");

// Then we can call object methods, such as `user.sayHi()`
user.sayHi();
