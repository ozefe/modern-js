// Create an empty object `user`
let user = {};

// Add the property `name` with the value `"John"`
user.name = "John";
alert(`User name: ${user.name}`);

// Add the property `surname` with the value `"Smith"`
user.surname = "Smith";
alert(`User surname: ${user.surname}`);

// Change the value of the `name` to `"Pete"`
user.name = "Pete";
alert(`User name: ${user.name}`);

// Remove the property `name` from the object
delete user.name;
alert(`User name: ${user.name}`);
