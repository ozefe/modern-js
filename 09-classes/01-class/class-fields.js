// "Class field" is a syntax that allows to add any properties.
class User {
    // `name` is a property of `User` class
    name = "John";

    sayHi() {
        alert(`Hello, ${this.name}!`);
    }
}

let user = new User();

// The important difference of class fields is that they are set on individual
// objects, not `User.prototype`:
new User().sayHi(); // Hello, John!
alert(User.prototype.name); // undefined
