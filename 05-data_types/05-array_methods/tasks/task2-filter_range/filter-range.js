function filterRange(arr, a, b) {
    return arr.filter((item) => item >= a && item <= b);
}

let arr = [5, 3, 8, 1];
alert(`Before array: ${arr}`); // 5,3,8,1

let filtered = filterRange(arr, 1, 4);
alert(`Filtered: ${filtered}`); // 3,1 (matching values)

alert(`After array: ${arr}`); // 5,3,8,1 (not modified)
