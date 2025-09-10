// `Array.from`: Takes an iterable or array-like value and makes a "real" Array
// from it. Then we can call array methods on it.
let arrayLike = {
    0: "Hello",
    1: "World",
    length: 2,
};

// Takes the object, examines it for being an iterable or array-like, then makes
// a new array and copies all items to it:
let arr = Array.from(arrayLike);
alert(arr.pop()); // World (method works)

let range = {
    from: 1,
    to: 5,

    [Symbol.iterator]() {
        this.current = this.from;
        return this;
    },

    next() {
        if (this.current <= this.to) {
            return { done: false, value: this.current++ };
        } else {
            return { done: true };
        }
    },
};

// square each number
arr = Array.from(range, (num) => num * num);
alert(arr); // 1,4,9,16,25

// Turning a string into an array of characters: Unlike `str.split`, it relies
// on the iterable nature of the string and so, just like `for..of`, correctly
// works with surrogate pairs.
let str = "𝒳😂";

// splits str into array of characters
let chars = Array.from(str);

// same as above:
// let chars = []; // Array.from internally does the same loop
// for (let char of str) {
//     chars.push(char);
// }

alert(chars[0]); // 𝒳
alert(chars[1]); // 😂
alert(chars.length); // 2

// surrogate-aware `slice`:
function slice(str, start, end) {
    return Array.from(str).slice(start, end).join("");
}

str = "𝒳😂𩷶";

alert(slice(str, 1, 3)); // 😂𩷶

// the native method does not support surrogate pairs
alert(str.slice(1, 3)); // garbage (two pieces from different surrogate pairs)
