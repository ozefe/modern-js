function pow(x, n) {
    return x ** n;
}

let x = prompt("x?", "");
let n = prompt("n?", "");

if (n < 1) alert(`Unsupported power: ${n}. Use a positive integer.`);
else alert(pow(x, n));
