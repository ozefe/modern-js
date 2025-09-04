// There are three variants of type conversion, that happen in various
// situations.
let obj = {};

// 1. String: For an object-to-string conversion, when we're doing an operation
// on an object that expects a string, like alert:
// output
alert(obj);

// using object as a property key
let anotherObj = {};
anotherObj[obj] = 123;

// 2. Number: For an object-to-number conversion, like when we're doing maths:
// explicit conversion
let num = Number(obj);

// maths (except binary plus)
let n = +obj; // unary plus
// let delta = date1 - date2;

// less/greater comparison
// let greater = user1 > user2;

// 3. Default: Occurs in rare cases when the operator is "not sure" what type
// to expect. For instance, binary plus + can work both with strings
// (concatenates them) and numbers (adds them). So if a binary plus gets an
// object as an argument, it uses the "default" hint to convert it. Also, if an
// object is compared using == with a string, number or a symbol, it's also
// unclear which conversion should be done, so the "default" hint is used.

// binary plus uses the "default" hint
// let total = obj1 + obj2;

// obj == number uses the "default" hint
// if (user == 1) { ... };
