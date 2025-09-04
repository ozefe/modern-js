// Are objects ordered? In other words, if we loop over an object, do we get
// all properties in the same order they were added? Can we rely on this?
//
// Integer properties are sorted, others appear in creation order. The
// "integer property" term here means a string that can be converted
// to-and-from an integer without a change:

// Number(...) explicitly converts to a number
// Math.trunc is a built-in function that removes the decimal part

// "49", same, integer property
alert(`49 => ${String(Math.trunc(Number("49")))}`);

// "49", not same "+49" => not integer property
alert(`+49 => ${String(Math.trunc(Number("+49")))}`);

// "1", not same "1.2" => not integer property
alert(`1.2 => ${String(Math.trunc(Number("1.2")))}`);

let codes = {
    49: "Germany",
    41: "Switzerland",
    44: "Great Britain",
    // ..,
    1: "USA",
};

for (let code in codes) {
    alert(`${code}: ${codes[code]}`); // 1, 41, 44, 49
}

// If the keys are non-integer, then they are listed in the creation order:
let user = {
    name: "John",
    surname: "Smith",
};
user.age = 25; // add one more

// non-integer properties are listed in the creation order
for (let prop in user) {
    alert(`${prop}: ${user[prop]}`); // name, surname, age
}

// To fix the issue with the phone codes, we can "cheat" by making the codes
// non-integer. Adding a plus "+"" sign before each code is enough:
codes = {
    "+49": "Germany",
    "+41": "Switzerland",
    "+44": "Great Britain",
    // ..,
    "+1": "USA",
};

for (let code in codes) {
    alert(`${code}: ${codes[code]}`); // 49, 41, 44, 1
}
