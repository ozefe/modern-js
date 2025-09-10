function unique(arr) {
    let unique_arr = [];

    arr.forEach((item) => {
        if (!unique_arr.includes(item)) unique_arr.push(item);
    });

    return unique_arr;
}

let strings = [
    "Hare",
    "Krishna",
    "Hare",
    "Krishna",
    "Krishna",
    "Krishna",
    "Hare",
    "Hare",
    ":-O",
];

alert(unique(strings)); // Hare, Krishna, :-O
