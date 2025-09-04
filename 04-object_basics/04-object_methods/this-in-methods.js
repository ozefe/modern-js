// To access the object, a method can use the `this` keyword. The value of
// `this` is the object "before dot", the one used to call the method:
let user = {
    name: "John",
    age: 30,

    sayHi() {
        // "this" is the "current object"
        alert(this.name);

        // Technically, it's also possible to access the object without `this`,
        // by referencing it via the outer variable:
        alert(user.name);
        // But such code is unreliable. If we decide to copy user to another
        // variable, e.g. admin = user and overwrite user with something else,
        // then it will access the wrong object.
    },
};
user.sayHi(); // John

let admin = user;
user = null; // overwrite to make things obvious
// admin.sayHi(); // TypeError: Cannot read property 'name' of null

// `this` can be used in any function, even if it's not a method of an object.
// The value of this is evaluated during the run-time, depending on the
// context:
function sayHi() {
    alert(this.name);
}
sayHi(); // undefined

// Here the same function is assigned to two different objects and has
// different `this` in the calls:
user = { name: "John" };
admin = { name: "Admin" };

// use the same function in two objects
user.f = sayHi;
admin.f = sayHi;

// these calls have different `this`
// `this` inside the function is the object "before the dot"
user.f(); // John (`this` == user)
admin.f(); // Admin (`this` == admin)

admin["f"](); // Admin (dot and square brackets both access the method)
