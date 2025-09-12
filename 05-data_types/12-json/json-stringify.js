// The JSON (JavaScript Object Notation) is a general format to represent values
// and objects. It is described as in RFC 4627 standard. Initially it was made
// for JavaScript, but many other languages have libraries to handle it as well.

let student = {
    name: "John",
    age: 30,
    isAdmin: false,
    courses: ["html", "css", "js"],
    spouse: null,
};

// takes the object and converts it into a string
let json = JSON.stringify(student);

alert(typeof json); // we've got a string!
alert(json);
/* JSON-encoded object:
{
  "name": "John",
  "age": 30,
  "isAdmin": false,
  "courses": ["html", "css", "js"],
  "spouse": null
}
*/

// `JSON.stringify` can be applied to primitives as well. JSON supports
// following data types:
// - Objects `{ ... }`
// - Arrays `[ ... ]`
// - Primitives:
//   - strings
//   - numbers
//   - boolean values true/false
//   - null

// a number in JSON is just a number
alert(JSON.stringify(1)); // 1

// a string in JSON is still a string, but double-quoted
alert(JSON.stringify("test")); // "test"

alert(JSON.stringify(true)); // true

alert(JSON.stringify([1, 2, 3])); // [1,2,3]

// JSON is data-only language-independent specification, so some
// JavaScript-specific object properties are skipped by `JSON.stringify`:
// - Function properties (methods).
// - Symbolic keys and values.
// - Properties that store `undefined`.
let user = {
    sayHi() {
        // ignored
        alert("Hello");
    },
    [Symbol("id")]: 123, // ignored
    something: undefined, // ignored
};

alert(JSON.stringify(user)); // {} (empty object)

// Nested objects are supported and converted automatically:
let meetup = {
    title: "Conference",
    room: {
        number: 23,
        participants: ["john", "ann"],
    },
};

alert(JSON.stringify(meetup));
/* The whole structure is stringified:
{
  "title":"Conference",
  "room":{"number":23,"participants":["john","ann"]},
}
*/

// NOTE: There must be no circular references:
let room = {
    number: 23,
};

meetup = {
    title: "Conference",
    participants: ["john", "ann"],
};

meetup.place = room; // meetup references room
room.occupiedBy = meetup; // room references meetup

JSON.stringify(meetup); // Error: Converting circular structure to JSON
