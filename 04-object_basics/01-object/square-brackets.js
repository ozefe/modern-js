// We can also use multiword property names, but then they must be quoted:
user = {
    name: "John",
    age: 30,
    "likes birds": true, // multiword property name must be quoted
};

// For multiword properties, the dot access doesn't work:
// user.likes birds = true // this would give a syntax error

// There's an alternative "square bracket notation" that works with any string:
// get
alert(`User likes birds: ${user["likes birds"]}`); // true

// set
user["likes birds"] = false;
alert(`User likes birds after set: ${user["likes birds"]}`); // false

// delete
delete user["likes birds"];
alert(`User likes birds after deletion: ${user["likes birds"]}`); // undefined

let key = "likes birds";

// same as user["likes birds"] = true;
user[key] = true;
alert(`User likes birds using expression: ${user["likes birds"]}`); // true

key = prompt("What do you want to know about the user?", "name");

// access by variable
alert(`User property requested: ${user[key]}`); // John (if enter "name")

// The dot notation cannot be used in a similar way:
key = "name";
alert(`User property requested: ${user.key}`); // undefined
