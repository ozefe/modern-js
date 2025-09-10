let arr = ["I", "go", "home"];

delete arr[1]; // remove "go"
alert(arr[1]); // undefined

alert(`Array after delete: ${arr}`); // I,,home
alert(arr.length); // 3

// `arr.splice(start[, deleteCount, elem1, ..., elemN])`: A Swiss army knife
// for arrays. It can do everything: insert, remove and replace elements. It
// modifies `arr` starting from the index start: removes `deleteCount` elements
// and then inserts `elem1, ..., elemN` at their place. Returns the array of
// removed elements.
arr = ["I", "study", "JavaScript"];

arr.splice(1, 1); // from index 1 remove 1 element
alert(arr); // ["I", "JavaScript"]

arr = ["I", "study", "JavaScript", "right", "now"];

// remove first 3 elements and replace them with another
let removed = arr.splice(0, 3, "Let's", "dance");
alert(`Removed: ${removed}`); // ["I", "study", "JavaScript"]

alert(arr); // now ["Let's", "dance", "right", "now"]

arr = ["I", "study", "JavaScript"];

// from index 2, delete 0, then insert "complex" and "language"
arr.splice(2, 0, "complex", "language");
alert(arr); // "I", "study", "complex", "language", "JavaScript"

// NOTE: Negative indexes allowed: They specify the position from the end of
// the array:
arr = [1, 2, 5];

// from index -1 (one step from the end), delete 0 elements, then insert 3
// and 4
arr.splice(-1, 0, 3, 4);
alert(arr); // 1,2,3,4,5
