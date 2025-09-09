// Array is an object and thus behaves like an object. For instance, it is
// copied by reference:
let fruits = ["Banana"];
let arr = fruits; // copy by reference

alert(`arr === fruits: ${arr === fruits}`); // true

arr.push("Pear"); // modify the array by reference
alert(`Fruits: ${fruits}`); // Banana,Pear -- 2 items now

// But it all breaks if we quit working with an array as with an
// "ordered collection" and start working with it as if it were a regular
// object:
fruits = []; // make an array

fruits[99] = 5; // assign a property with the index far greater than its length
fruits.age = 25; // create a property with an arbitrary name

alert(`Array from hell: ${fruits}`);

// The engine will see that we're working with the array as with a regular
// object. Array-specific optimizations are not suited for such cases and will
// be turned off, their benefits disappear.
