function pow(x, n) {
    return x ** n;
}

// Let's not cheat...
function pow(x, n) {
    let result = 1;
    for (let i = 1; i <= n; i++) result *= x;

    return result;
}

alert(pow(3, 2) == 3 * 3);
alert(pow(3, 3) == 3 * 3 * 3);
alert(pow(1, 100) == 1 ** 100);

let x = prompt("Please provide x: ", 2);
let n = prompt("Please provide n: ", 8);

if (n < 1) {
    alert(`Power ${n} is not supported, use a positive integer!`);
} else {
    alert(`pow(${x}, ${n}) = ${pow(x, n)}`);
}
