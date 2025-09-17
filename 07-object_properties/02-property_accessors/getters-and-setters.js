"use strict";

// Accessor properties are represented by "getter" and "setter" methods. They
// are essentially functions that execute on getting and setting a value, but
// look like regular properties to an external code. In an object literal they
// are denoted by `get` and `set`:
let obj = {
    get propName() {
        // getter, the code executed on getting `obj.propName`
    },

    set propName(value) {
        // setter, the code executed on setting `obj.propName = value`
    },
};

{
    // The getter works when `obj.propName` is read, the setter -- when it is
    // assigned.
    let user = {
        name: "John",
        surname: "Smith",

        get fullName() {
            return `${this.name} ${this.surname}`;
        },
    };

    // From the outside, an accessor property looks like a regular one. That’s
    // the idea of accessor properties. We don't call `user.fullName` as a
    // function, we read it normally: the getter runs behind the scenes.
    alert(user.fullName); // John Smith

    // TypeError: Cannot set property fullName of #<Object> which has only a
    // getter
    // user.fullName = "Test"; // property has only a getter
}

{
    let user = {
        name: "John",
        surname: "Smith",

        get fullName() {
            return `${this.name} ${this.surname}`;
        },

        set fullName(value) {
            [this.name, this.surname] = value.split(" ");
        },
    };

    // set `fullName` is executed with the given value
    user.fullName = "Alice Cooper";

    alert(user.name); // Alice
    alert(user.surname); // Cooper
}
