// we have an array with a name and surname
let arr = ["John", "Smith"];

// destructuring assignment sets `firstName = arr[0]` and `surname = arr[1]`
let [firstName, surname] = arr;

alert(firstName); // John
alert(surname); // Smith

[firstName, surname] = "John Smith".split(" ");
alert(firstName); // John
alert(surname); // Smith

// NOTE: "Destructuring" does not mean "destructive": the array itself is not
// modified. It's just a shorter way to write:
// let [firstName, surname] = arr;
firstName = arr[0];
surname = arr[1];

// NOTE: Ignore elements using commas: Unwanted elements of the array can also
// be thrown away via an extra comma:
// second element is not needed
let [name, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
alert(title); // Consul

// NOTE: Works with any iterable on the right-side:
let [a, b, c] = "abc"; // ["a", "b", "c"]
let [one, two, three] = new Set([1, 2, 3]);

// NOTE: Assign to anything at the left-side: We can use any "assignables" on
// the left side:
let user = {};
[user.name, user.surname] = "John Smith".split(" ");

alert(user.name); // John
alert(user.surname); // Smith

// NOTE: Looping with `Object.entries()`: We can use it with destructuring to
// loop over the keys-and-values of an object:
user = {
    name: "John",
    age: 30,
};

// loop over the keys-and-values
for (let [key, value] of Object.entries(user)) {
    alert(`${key}: ${value}`); // name: John, then age: 30
}

user = new Map();
user.set("name", "John");
user.set("age", "30");

// Map iterates as [key, value] pairs, very convenient for destructuring
for (let [key, value] of user) {
    alert(`${key}:${value}`); // name:John, then age:30
}

// NOTE: Swap variables trick: swapping values of two variables using a
// destructuring assignment:
let guest = "Jane";
let admin = "Pete";

// Let's swap the values: make guest=Pete, admin=Jane
[guest, admin] = [admin, guest];

alert(`${guest} ${admin}`); // Pete Jane (successfully swapped!)

// If the array is longer than the list at the left, the "extra" items are
// omitted:
let [name1, name2] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

alert(name1); // Julius
alert(name2); // Caesar
// Further items aren't assigned anywhere

// If we'd like also to gather all that follows, we can add one more parameter
// that gets "the rest" using three dots "...":
let [julius, caesar, ...rest] = [
    "Julius",
    "Caesar",
    "Consul",
    "of the Roman Republic",
];

// rest is an array of items, starting from the 3rd one
alert(rest[0]); // Consul
alert(rest[1]); // of the Roman Republic
alert(rest.length); // 2

// If the array is shorter than the list of variables on the left, there will be
// no errors. Absent values are considered undefined:
[firstName, surname] = [];

alert(firstName); // undefined
alert(surname); // undefined

// If we want a "default" value to replace the missing one, we can provide it
// using =:
[name = "Guest", surname = "Anonymous"] = ["Julius"];

alert(name); // Julius (from array)
alert(surname); // Anonymous (default used)

// Default values can be more complex expressions or even function calls. They
// are evaluated only if the value is not provided:
// runs prompt only for surname
[name = prompt("name?"), surname = prompt("surname?")] = ["Julius"];

alert(name); // Julius (from array)
alert(surname); // whatever prompt gets
