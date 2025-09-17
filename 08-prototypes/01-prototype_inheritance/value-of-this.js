// `this` is not affected by prototypes at all. No matter where the method is
// found: in an object or its prototype. In a method call, `this` is always the
// object before the dot.
//
// We may have a big object with many methods, and have objects that inherit
// from it. And when the inheriting objects run the inherited methods, they will
// modify only their own states, not the state of the big object. As a result,
// methods are shared, but the object state is not.

// animal has methods
let animal = {
    walk() {
        if (!this.isSleeping) {
            alert("I walk");
        }
    },

    sleep() {
        this.isSleeping = true;
    },
};

let rabbit = {
    __proto__: animal,

    name: "White Rabbit",
};

// sets `this.isSleeping` on the `rabbit` object
rabbit.sleep();

alert(rabbit.isSleeping); // true
alert(animal.isSleeping); // undefined (no such property in the prototype)
