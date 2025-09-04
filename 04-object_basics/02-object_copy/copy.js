// One of the fundamental differences of objects versus primitives is that
// objects are stored and copied "by reference", whereas primitive values:
// strings, numbers, booleans, etc. are always copied "as a whole value".

// Create a string
let message = "Hello!";
alert(`Message: ${message}`); // "Hello!"

// Copy the string: this copies the whole *value*, not the reference:
let phrase = message;
alert(`Phrase: ${phrase}`); // "Hello!"

// Let's change the message and see how it affects things:
message = "Hi!";
alert(`Message: ${message}`); // "Hi!"

alert(`Phrase: ${phrase}`); // "Hello!"

// Now let's try the same thing with an object:

// Create an object
let user = {
    name: "John",
};
alert(`User name: ${user.name}`); // "John"

// Copy the reference: this copies only the *reference* to the actual object,
// not the whole *value* of the object.
let admin = user;
alert(`Admin name: ${admin.name}`); // "John"

// Let's change the admin's name to see how it will affect things:
admin.name = "Pete";
alert(`Admin name: ${admin.name}`); // "Pete"

alert(`User name: ${user.name}`); // "Pete"
