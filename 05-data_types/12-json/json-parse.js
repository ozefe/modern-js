// let value = JSON.parse(str[, reviver]);

// stringified array
let numbers = "[0, 1, 2, 3]";

// decode a JSON-string
numbers = JSON.parse(numbers);

alert(numbers[1]); // 1

// Nested objects:
let userData =
    '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';

let user = JSON.parse(userData);

alert(user.friends[1]); // 1

// Typical mistakes in hand-written JSON:
let json = `{
  name: "John",                     // mistake: property name without quotes
  "surname": 'Smith',               // mistake: single quotes in value (must be double)
  'isAdmin': false                  // mistake: single quotes in key (must be double)
  "birthday": new Date(2000, 2, 3), // mistake: no "new" is allowed, only bare values
  "friends": [0,1,2,3]              // here all fine
}`;
