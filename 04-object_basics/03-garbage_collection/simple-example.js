// user has a reference to the object
let user = {
    name: "John",
};

// If the value of user is overwritten, the reference is lost:
user = null;

// Now John becomes unreachable. There's no way to access it, no references to
// it. Garbage collector will junk the data and free the memory.
