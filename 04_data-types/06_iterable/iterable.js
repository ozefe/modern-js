// let range = {
//   from: 1,
//   to: 5,
// };

// // 1. call to for..of initially calls this
// range[Symbol.iterator] = function () {
//   // ...it returns the iterator object:
//   // 2. Onward, for..of works only with the iterator object below, asking it for next values
//   return {
//     current: this.from,
//     last: this.to,

//     // 3. next() is called on each iteration by the for..of loop
//     next() {
//       // 4. it should return the value as an object {done:..., value:...}
//       if (this.current <= this.last) {
//         return { done: false, value: this.current++ };
//       } else {
//         return { done: true };
//       }
//     },
//   };
// };

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

// now it works!
for (let num of range) {
  alert(num); // 1, then 2, 3, 4, 5
}

for (let char of "test") {
  // triggers 4 times: once for each character
  alert(char);
}

let str = "𝒳😂";
for (let char of str) {
  alert(char); // 𝒳, and then 😂
}

str = "Hello";

// does the same as
// for (let char of str) alert(char);

let iterator = str[Symbol.iterator]();

while (true) {
  let result = iterator.next();
  if (result.done) break;
  alert(result.value); // outputs characters one by one
}

// has indexes and length => array-like
let arrayLike = {
  0: "Hello",
  1: "World",
  length: 2,
};

// TypeError: arrayLike is not iterable (no Symbol.iterator)
for (let item of arrayLike) {
}

let arr = Array.from(arrayLike);
alert(arr.pop()); // World (method works)

range = {
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

arr = Array.from(range);
alert(arr); // 1,2,3,4,5 (array toString conversion works)

range = {
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

arr = Array.from(range, (num) => num * num);
alert(arr); // 1,4,9,16,25

str = "𝒳😂";

// splits str into array of characters
let chars = Array.from(str);

alert(chars[0]); // 𝒳
alert(chars[1]); // 😂
alert(chars.length); // 2

// Array.from internally does the same loop
chars = [];
for (let char of str) {
  chars.push(char);
}

alert(chars);

function slice(str, start, end) {
  return Array.from(str).slice(start, end).join("");
}

str = "𝒳😂𩷶";

alert(slice(str, 1, 3)); // 😂𩷶

// the native method does not support surrogate pairs
alert(str.slice(1, 3)); // garbage (two pieces from different surrogate pairs)
