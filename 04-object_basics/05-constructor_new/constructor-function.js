// Constructor functions technically are regular functions. There are two
// conventions:
//   1. They are named with capital letter first.
//   2. They should be executed only with "new" operator.
function User(name) {
    // this = {};  (implicitly)

    // add properties to this
    this.name = name;
    this.isAdmin = false;

    // return this;  (implicitly)
}

let user = new User("Jack");

alert(user.name); // Jack
alert(user.isAdmin); // false

// If we have many lines of code all about creation of a single complex object,
// we can wrap them in an immediately called constructor function, like this:
// create a function and immediately call it with new
let user_immediate = new (function () {
    this.name = "John";
    this.isAdmin = false;

    // ...other code for user creation, maybe complex logic and statements,
    // local variables etc.
})();

alert(user_immediate.name); // John
alert(user_immediate.isAdmin); // false
