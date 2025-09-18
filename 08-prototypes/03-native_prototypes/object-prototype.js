let obj = {};

// Same as:
// let obj = new Object();
// where `Object` is a built-in object constructor function, with its own
// prototype referencing a huge object with `toString` and other methods.

// When `obj.toString()` is called the method is taken from `Object.prototype`:
alert(obj); // "[object Object]"

// We can check it like this:
alert(obj.__proto__ === Object.prototype); // true

alert(obj.toString === obj.__proto__.toString); //true
alert(obj.toString === Object.prototype.toString); //true
