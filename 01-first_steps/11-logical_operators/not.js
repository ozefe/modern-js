// NOT (`!`)
// result = !value;
alert(!true); // false
alert(!0); // true

// A double NOT (`!!`) is sometimes used for converting a value to boolean type:
alert(!!"non-empty string"); // true
alert(!!null); // false

alert(Boolean("non-empty string")); // true
alert(Boolean(null)); // false
