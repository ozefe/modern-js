// The third argument of `JSON.stringify(value, replacer, space)` is the number
// of spaces to use for pretty formatting.
let user = {
    name: "John",
    age: 25,
    roles: {
        isAdmin: false,
        isEditor: true,
    },
};

alert(JSON.stringify(user, null, 2));
/* two-space indents:
{
  "name": "John",
  "age": 25,
  "roles": {
    "isAdmin": false,
    "isEditor": true
  }
}
*/

// The third argument can also be a string. In this case, the string is used for
// indentation instead of a number of spaces:
console.log(JSON.stringify(user, null, "____")); // indent with 4 underscores
/*
{
____"name": "John",
____"age": 25,
____"roles": {
________"isAdmin": false,
________"isEditor": true
____}
}
*/
