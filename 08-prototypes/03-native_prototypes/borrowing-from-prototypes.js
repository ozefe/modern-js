// Method borrowing is when we take a method from one object and copy it into
// another. Some methods of native prototypes are often borrowed:

// Array-like object
let obj = {
    0: "Hello",
    1: "world!",
    length: 2,
};

// we’re working with an array-like object, so we may want to copy some `Array`
// methods to it:
obj.join = Array.prototype.join;

// Another possibility is to inherit by setting `obj.__proto__` to
// `Array.prototype`, so all `Array` methods are automatically available in
// `obj` -- but that's impossible if `obj` already inherits from another object.
// Remember, we only can inherit from one object at a time.

// It works because the internal algorithm of the built-in `join` method only
// cares about the correct indexes and the `length` property. It doesn't check
// if the object is indeed an array. Many built-in methods are like that.
alert(obj.join(", ")); // Hello, world!
