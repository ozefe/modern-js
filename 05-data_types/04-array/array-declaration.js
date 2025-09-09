// There are two syntaxes for creating an empty array:
let arr = new Array();
arr = [];

// We can supply initial elements in the brackets:
let fruits = ["Apple", "Orange", "Plum"];

// We can get an element by its number in square brackets:
alert(`First element: ${fruits[0]}`); // Apple
alert(`Second element: ${fruits[1]}`); // Orange
alert(`Third element: ${fruits[2]}`); // Plum

// We can replace an element:
fruits[2] = "Pear"; // now ["Apple", "Orange", "Pear"]

// and add a new one to the array:
fruits[3] = "Lemon"; // now ["Apple", "Orange", "Pear", "Lemon"]

// The total count of the elements in the array is its length:
alert(`Array length: ${fruits.length}`); // 4

// We can also use alert to show the whole array.
alert(`Array: ${fruits}`); // Apple,Orange,Pear,Lemon

// An array can store elements of any type:
// mix of values
let arr2 = [
    "Apple",
    { name: "John" },
    true,
    function () {
        alert("hello");
    },
];

// get the object at index 1 and then show its name
alert(arr2[1].name); // John

// get the function at index 3 and run it
arr2[3](); // hello
