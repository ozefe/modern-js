function pow(x, n) {
    let result = 1;

    for (let i = 0; i < n; i++) {
        result *= x;
    }

    return result;
}

let x = prompt("x?", ""),
    n = prompt("n?", "");

if (n > 0) {
    alert(pow(x, n));
} else {
    alert(
        `Power ${n} is not supported,
        please enter an integer number greater than zero`
    );
}
