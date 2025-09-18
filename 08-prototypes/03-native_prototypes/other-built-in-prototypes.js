// Other built-in objects such as `Array`, `Date`, `Function` and others also
// keep methods in prototypes. By specification, all of the built-in prototypes
// have `Object.prototype` on the top. That's why some people say that
// "everything inherits from objects".

let arr = [1, 2, 3];

// `arr` inherits from `Array.prototype`
alert(arr.__proto__ === Array.prototype); // true

// and then `Array.prototype` inherits from `Object.prototype`
alert(arr.__proto__.__proto__ === Object.prototype); // true

// and then `Object.prototype` is null, it doesn't inherit from anything
alert(arr.__proto__.__proto__.__proto__); // null

// Some methods in prototypes may overlap, e.g. `Array.prototype` has its own
// `toString` that lists comma-delimited elements:
alert(arr); // 1,2,3 <- the result of `Array.prototype.toString`
// `Object.prototype` has `toString` as well, but `Array.prototype` is closer in
// the chain, so the array variant is used.

// Other built-in objects also work the same way. Even functions -- they are
// objects of a built-in `Function` constructor, and their methods
// (`call`/`apply` and others) are taken from `Function.prototype`. Functions
// have their own `toString` too.
function f() {}

alert(f.__proto__ == Function.prototype); // true
alert(f.__proto__.__proto__ == Object.prototype); // true, inherit from objects

// We can see the `[[Prototype]]` properties, the complete inheritance chain and
// all available methods in browser:
console.dir([1, 2, 3]); // Example for array
