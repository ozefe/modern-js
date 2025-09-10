// The call to `arr.sort()` sorts the array in place, changing its element
// order. It also returns the sorted array, but the returned value is usually
// ignored, as `arr` itself is modified.
let arr = [1, 2, 15];

// the method reorders the content of arr
arr.sort();

// The items are sorted as strings by default. This is the worst language
// design decision I've ever seen. Holy fucking shit.
alert(arr); // 1, 15, 2

// To use our own sorting order, we need to supply a function as the argument
// of `arr.sort()`:
function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}

arr.sort(compareNumeric);
alert(arr); // 1, 2, 15

[1, -2, 15, 2, 0, 8].sort(function (a, b) {
    alert(a + " <> " + b);
    return a - b;
});

// NOTE: Use `localeCompare` for strings:
let countries = ["Österreich", "Andorra", "Vietnam"];

// Andorra, Vietnam, Österreich (wrong)
alert(countries.sort((a, b) => (a > b ? 1 : -1)));

// Andorra, Österreich, Vietnam (correct!)
alert(countries.sort((a, b) => a.localeCompare(b)));
