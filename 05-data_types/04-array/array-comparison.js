// Arrays in JavaScript, unlike some other programming languages, shouldn't be
// compared with operator `==`. This operator has no special treatment for
// arrays, it works with them as with any objects. So, if we compare arrays
// with `==`, they are never the same, unless we compare two variables that
// reference exactly the same array.

// These arrays are technically different objects. So they aren't equal. The
// `==` operator doesn't do item-by-item comparison.
alert([] == []); // false
alert([0] == [0]); // false

// Here, in both cases, we compare a primitive with an array object. So the
// array `[]` gets converted to primitive for the purpose of comparison and
// becomes an empty string "".
alert(0 == []); // true
alert("0" == []); // false
