// There is one more syntax to create an array:
let arr = new Array("Apple", "Pear", "etc");

// If `new Array` is called with a single argument which is a number, then it
// creates an array without items, but with the given length:
arr = new Array(2); // will it create an array of [2]?

alert(arr[0]); // undefined! no elements.
alert(arr.length); // length 2
