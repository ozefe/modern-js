// `array.pop()`: Extracts the last element of the `array` and returns it:
let fruits = ["Apple", "Orange", "Pear"];

alert(`Array before pop: ${fruits}`); // Apple,Orange,Pear
alert(`Popped: ${fruits.pop()}`); // remove "Pear" and alert it
alert(`Array after pop: ${fruits}`); // Apple,Orange

// Both `fruits.pop()` and `fruits.at(-1)` return the last element of the
// array, but `fruits.pop()` also modifies the array by removing it.

// `array.push(element)`: Append the `element` to the end of the `array`:
fruits.push("Pear");
alert(`Array after push: ${fruits}`); // Apple,Orange,Pear

// The call `fruits.push(...)` is equal to `fruits[fruits.length] = ...`

// `array.shift()`: Extracts the first element of the `array` and returns it:
alert(`Shifted: ${fruits.shift()}`); // remove Apple and alert it
alert(`Array after shift: ${fruits}`); // Orange,Pear

// `array.unshift(element)`: Add the `element` to the beginning of the `array`:
fruits.unshift("Apple");
alert(`Array after unshift: ${fruits}`); // Apple,Orange,Pear

// NOTE: Methods `push` and `unshift` can add multiple elements at once:
fruits = ["Apple"];

fruits.push("Orange", "Peach");
fruits.unshift("Pineapple", "Lemon");

alert(fruits); // ["Pineapple", "Lemon", "Apple", "Orange", "Peach"]
