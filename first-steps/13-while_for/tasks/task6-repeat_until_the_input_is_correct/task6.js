while (true) {
    let number = prompt("Please enter a number greater than 100: ", "");
    if (number === "" || number === null || +number > 100) break;
}

// A different way:
let number;
do {
    number = prompt("Please enter a number greater than 100: ", "");
} while (number <= 100 && number);
