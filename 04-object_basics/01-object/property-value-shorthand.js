// In real code, we often use existing variables as values for property names:
function makeUser(name, age) {
    return {
        name: name,
        age: age,
        hobby: "Programming",
        // ...other properties
    };
}

let user = makeUser("John", 30);
alert(`User name: ${user.name}`); // John
alert(`User age: ${user.age}`); // 30
alert(`User hobby: ${user.hobby}`); // Programming

// The use-case of making a property from a variable is so common, that there's
// a special property value shorthand to make it shorter:

function makeUser(name, age) {
    return {
        name, // same as name: name

        // We can use both normal properties and shorthands in the same object
        age: age,
        hobby: "Programming",
        // ...
    };
}

user = makeUser("John", 30);
alert(`User name: ${user.name}`); // John
alert(`User age: ${user.age}`); // 30
alert(`User hobby: ${user.hobby}`); // Programming
