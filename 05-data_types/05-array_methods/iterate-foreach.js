// The `arr.forEach()` method allows to run a function for every element of the
// array.
// arr.forEach(function (item, index, array) {
//     // ... do something with an item
// });

// for each element call alert
["Bilbo", "Gandalf", "Nazgul"].forEach(alert);

// more complex
["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
    alert(`${item} is at index ${index} in ${array}`);
});
