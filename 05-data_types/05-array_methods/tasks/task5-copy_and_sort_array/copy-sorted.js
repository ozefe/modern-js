function copySorted(arr) {
    let arr_copy = arr.slice();
    return arr_copy.sort();
}

let arr = ["HTML", "JavaScript", "CSS"];
alert(`Array before: ${arr}`); // HTML, JavaScript, CSS

let sorted = copySorted(arr);
alert(`Sorted: ${sorted}`); // CSS, HTML, JavaScript

alert(`Array after: ${arr}`); // HTML, JavaScript, CSS (no changes)
