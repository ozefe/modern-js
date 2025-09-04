// To walk over all keys of an object, there exists a special form of the loop:
// for (key in object) {
//     // executes the body for each key among object properties
// }

let user = {
    name: "John",
    age: 30,
    isAdmin: true,
};

for (let key in user) {
    alert(`The value of property ${key} is ${user[key]}`);
}
