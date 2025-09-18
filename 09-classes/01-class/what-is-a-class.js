// In JavaScript, a class is a kind of function:
class User {
    constructor(name) {
        this.name = name;
    }

    sayHi() {
        alert(this.name);
    }
}

// proof: `User` is a function
alert(typeof User); // function

// ...or, more precisely, the `constructor` method
alert(User === User.prototype.constructor); // true

// The methods are in `User.prototype`, e.g:
alert(User.prototype.sayHi); // the code of the `sayHi` method

// there are exactly two methods in the prototype
alert(Object.getOwnPropertyNames(User.prototype)); // constructor, sayHi

// What `class User { ... }` construct really does is:
// 1. Creates a function named `User`, that becomes the result of the class
//    declaration. The function code is taken from the `constructor` method
//    (assumed empty if we don't write such method).
// 2. Stores class methods, such as `sayHi`, in `User.prototype`.
//
// After `new User` object is created, when we call its method, it's taken from
// the prototype. So the object has access to class methods.
