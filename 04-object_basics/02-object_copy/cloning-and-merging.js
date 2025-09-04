// We can create a new object and replicate the structure of the existing one,
// by iterating over its properties and copying them on the primitive level:
let user = {
    name: "John",
    age: 30,
};
let clone = {}; // the new empty object

alert(`User name: ${user.name}`); // "John"
alert(`Clone name: ${clone.name}`); // undefined

// let's copy all user properties into it
for (let key in user) {
    clone[key] = user[key];
}

alert(`User name: ${user.name}`); // "John"
alert(`Clone name: ${clone.name}`); // "John"

// now clone is a fully independent object with the same content
clone.name = "Pete"; // changed the data in it

alert(`User name: ${user.name}`); // still John in the original object
alert(`Clone name after change: ${clone.name}`); // "Pete"

// We can also use the method `Object.assign`. It copies the properties of all
// source objects into the target dest, and then returns it as the result.

// Object.assign(dest, ...sources)
// The first argument dest is a target object.
// Further arguments is a list of source objects.

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// copies all properties from permissions1 and permissions2 into user
Object.assign(user, permissions1, permissions2);

// now user = { name: "John", age: 30, canView: true, canEdit: true }
alert(`User name: ${user.name}`); // "John"
alert(`User age: ${user.age}`); // 30
alert(`User canView: ${user.canView}`); // true
alert(`User canEdit: ${user.canEdit}`); // true

// If the copied property name already exists, it gets overwritten:
Object.assign(user, { name: "Pete" });
alert(`User name: ${user.name}`); // "Pete"

// We also can use `Object.assign` to perform a simple object cloning:
user = {
    name: "John",
    age: 30,
};

let user_clone = Object.assign({}, user);

alert(`User clone name: ${user_clone.name}`); // "John"
alert(`User clone age: ${user_clone.age}`); // 30
