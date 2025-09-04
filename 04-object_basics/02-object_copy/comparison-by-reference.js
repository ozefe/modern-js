// Two objects are equal only if they are the same object
// (they refer to the same value):
let a = {};
let b = a; // copy the reference

alert(`a == b => ${a == b}`); // true, both variables reference the same object
alert(`a === b => ${a === b}`); // true

// two independent objects are not equal, even though they look alike
// (both are empty):
a = {};
b = {}; // two independent objects

alert(`a == b => ${a == b}`); // false
