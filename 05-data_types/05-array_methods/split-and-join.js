// `str.split(delim)`: Splits the `str` into an array by the given delimiter
// `delim`.
let names = "Bilbo, Gandalf, Nazgul";

let arr = names.split(", ");
for (let name of arr) {
    alert(`A message to ${name}.`); // A message to Bilbo  (and other names)
}

// The split method has an optional second numeric argument -- a limit on the
// array length. If it is provided, then the extra elements are ignored. In
// practice it is rarely used:
arr = "Bilbo, Gandalf, Nazgul, Saruman".split(", ", 2);
alert(arr); // Bilbo, Gandalf

// NOTE: Split into letters: The call to `split(s)` with an empty `s` would
// split the string into an array of letters:
let str = "test";
alert(str.split("")); // t,e,s,t

// The call `arr.join(glue)` does the reverse of `split`. It creates a string
// of `arr` items joined by `glue` between them.
arr = ["Bilbo", "Gandalf", "Nazgul"];

str = arr.join(";"); // glue the array into a string using ;
alert(str); // Bilbo;Gandalf;Nazgul
