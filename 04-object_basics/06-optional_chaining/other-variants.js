// The optional chaining ?. is not an operator, but a special syntax construct,
// that also works with functions and square brackets. For example, ?.() is
// used to call a function that may not exist:
let userAdmin = {
    admin() {
        alert("I am admin");
    },
};

let userGuest = {};

userAdmin.admin?.(); // I am admin
userGuest.admin?.(); // nothing happens (no such method)

// The ?.[] syntax also works, if we'd like to use brackets [] to access
// properties instead of dot. Similar to previous cases, it allows to safely
// read a property from an object that may not exist:
let key = "firstName";

let user1 = {
    firstName: "John",
};

let user2 = null;

alert(`user1 first name: ${user1?.[key]}`); // John
alert(`user2 first name: ${user2?.[key]}`); // undefined

// Also we can use ?. with delete:
delete user1?.firstName; // delete user1.firstName if user1 exists
alert(`user1 first name: ${user1[key]}`); // undefined

// We can use ?. for safe reading and deleting, but not writing. The optional
// chaining ?. has no use on the left side of an assignment:
let user = null;

user?.name = "John"; // Error, doesn't work
// because it evaluates to: undefined = "John"
