// an object
let user = {
    name: "John", // by key "name" store value "John"
    age: 30, // by key "age" store value 30
};

// get property values of the object:
alert(`User name: ${user.name}`); // John
alert(`User age: ${user.age}`); // 30

user.isAdmin = true;
alert(`User is admin: ${user.isAdmin}`); // true

delete user.age;
alert(`User age after deletion: ${user.age}`); // undefined
