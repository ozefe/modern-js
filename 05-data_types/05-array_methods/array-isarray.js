// Arrays do not form a separate language type. They are based on objects. So
// `typeof` does not help to distinguish a plain object from an array:
alert(typeof {}); // object
alert(typeof []); // object (same)

// But arrays are used so often that there's a special method for that:
// `Array.isArray(value)`. It returns `true` if the value is an array, and
// `false` otherwise:
alert(Array.isArray({})); // false
alert(Array.isArray([])); // true
