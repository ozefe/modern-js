// Let's imagine we copied the reference from user to admin:
// user has a reference to the object
let user = {
    name: "John",
};

let admin = user;

// If we do:
user = null;

// Then the object is still reachable via admin global variable, so it must
// stay in memory. If we overwrite admin too, then it can be removed.
