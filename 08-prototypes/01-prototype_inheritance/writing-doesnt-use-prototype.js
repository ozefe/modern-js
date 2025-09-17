// The prototype is only used for reading properties. Write/delete operations
// work directly with the object.
let animal = {
    eats: true,
    walk() {
        /* this method won't be used by rabbit */
        alert("Not used!");
    },
};

let rabbit = {
    __proto__: animal,
};

// We overwrite the `walk()` method for `rabbit`:
rabbit.walk = function () {
    alert("Rabbit! Bounce-bounce!");
};

// From now on, `rabbit.walk()` call finds the method immediately in the object
// and executes it, without using the prototype:
rabbit.walk(); // Rabbit! Bounce-bounce!

// Accessor properties are an exception, as assignment is handled by a setter
// function. So writing to such a property is actually the same as calling a
// function.
let user = {
    name: "John",
    surname: "Smith",

    set fullName(value) {
        [this.name, this.surname] = value.split(" ");
    },

    get fullName() {
        return `${this.name} ${this.surname}`;
    },
};

let admin = {
    __proto__: user,
    isAdmin: true,
};

// The property `admin.fullName` has a getter in the prototype `user`, so it is
// called:
alert(admin.fullName); // John Smith

// the property has a setter in the prototype, so it is called.
admin.fullName = "Alice Cooper"; // setter triggers!

alert(admin.fullName); // Alice Cooper, state of `admin` modified
alert(user.fullName); // John Smith, state of `user` protected
