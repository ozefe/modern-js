function printNumbersInterval(from, to) {
    let currentNumber = from;

    let timerId = setInterval(() => {
        alert(currentNumber);
        currentNumber++;

        // Kill the scheduling after all numbers are printed:
        if (currentNumber > to) clearInterval(timerId);
    }, 1000);
}

printNumbersInterval(4, 10);

function printNumbersTimeout(from, to) {
    let currentNumber = from;

    setTimeout(function printNumber() {
        alert(currentNumber);
        currentNumber++;

        if (currentNumber <= to) setTimeout(printNumber, 1000);
    }, 1000);
}

printNumbersTimeout(4, 10);
