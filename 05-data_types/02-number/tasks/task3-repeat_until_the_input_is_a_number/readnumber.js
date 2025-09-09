function readNumber() {
    let num;

    do {
        num = prompt("Please enter a valid number:", 2);
    } while (!isFinite(num));

    if (num === "" || num === null) return null;

    return +num;
}

alert(`Entered number: ${readNumber()}`);
