// Terms: "unary", "binary", "operand"
let x = 1;

x = -x;
alert(x); // -1, unary negation was applied

let x2 = 1,
    y = 3;
alert(y - x2); // 2, binary minus subtracts values

// String concatenation with binary +
let s = "my" + "string";
alert(s); // mystring

// Note that if any of the operands is a string, then the other one is
// converted to a string too:
alert("1" + 2); // "12"
alert(2 + "1"); // "21"
alert(2 + 2 + "1"); // "41" and not "221"

alert(6 - "2"); // 4, converts '2' to a number
alert("6" / "2"); // 3, converts both operands to numbers
