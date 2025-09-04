// A variable cannot have a name equal to one of the language-reserved words
// like "for", "let", "return" etc. But for an object property, there's no such
// restriction:
// these properties are all right
let obj = {
    for: 1,
    let: 2,
    return: 3,
};
alert(`Sum: ${obj.for + obj.let + obj.return}`); // 6

// Other types are automatically converted to strings:
obj = {
    0: "test", // same as "0": "test"
};

// both alerts access the same property
// (the number 0 is converted to string "0")
alert(`Property access with string: ${obj["0"]}`); // test
alert(`Property access with integer: ${obj[0]}`); // test (same property)

// There's a minor gotcha with a special property named __proto__. We can't set
// it to a non-object value:
obj.__proto__ = 5; // assign a number

// alerts [object Object] -- the value is an object, didn't work as intended
alert(obj.__proto__);
