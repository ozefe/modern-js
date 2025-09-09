// Numeric conversion using a plus + or Number() is strict. If a value is not
// exactly a number, it fails:
alert(`"100px" as a number: ${+"100px"}`); // NaN

// That's what parseInt and parseFloat are for. They "read" a number from a
// string until they can't. In case of an error, the gathered number is
// returned. The function `parseInt` returns an integer, whilst `parseFloat`
// will return a floating-point number:
alert(`"100px" as an integer: ${parseInt("100px")}`); // 100
alert(`"12.5em" as a float: ${parseFloat("12.5em")}`); // 12.5

// 12, only the integer part is returned
alert(`"12.3" as an integer: ${parseInt("12.3")}`);

// 12.3, the second point stops the reading
alert(`"12.3.4" as a float: ${parseFloat("12.3.4")}`);

// parseInt/parseFloat will return NaN when no digits could be read:
// NaN, the first symbol stops the process
alert(`"a123" as an integer: ${parseInt("a123")}`);

// NOTE: The second argument of `parseInt(str, radix)`: The `parseInt()`
// function has an optional second parameter. It specifies the base of the
// numeral system, so parseInt can also parse strings of hex numbers, binary
// numbers and so on:
alert(`"0xff" as a hexadecimal integer: ${parseInt("0xff", 16)}`); // 255

// 255, without 0x also works
alert(`"ff" as a hexadecimal integer: ${parseInt("ff", 16)}`);
alert(`"2n9c" as an integer with base 36: ${parseInt("2n9c", 36)}`); // 123456
