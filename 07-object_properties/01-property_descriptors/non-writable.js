"use strict";

// Let’s make `user.name` non-writable (can't be reassigned):
let user = {
    name: "John",
};

Object.defineProperty(user, "name", {
    writable: false,
});

// Now no one can change the `name` of our `user`, unless they apply their own
// `defineProperty` to override ours.
user.name = "Pete"; // Error: Cannot assign to read only property 'name'
