let user = {
    name: "John Smith",
    age: 35,
};

// Turn `user` into a JSON-string:
let userString = JSON.stringify(user);
alert(`user as string: ${userString}`);

// Read the JSON-string back into an object:
let userObj = JSON.parse(userString);
alert(`user as object: ${userObj}`);
