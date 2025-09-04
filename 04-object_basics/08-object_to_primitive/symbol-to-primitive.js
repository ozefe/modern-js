// There's a built-in symbol named `Symbol.toPrimitive` that should be used to
// name the conversion method, like this:
// obj[Symbol.toPrimitive] = function (hint) {
//     // here goes the code to convert this object to a primitive
//     // it must return a primitive value
//     // hint = one of "string", "number", "default"
// };

// If the method `Symbol.toPrimitive` exists, it's used for all hints, and no
// more methods are needed.
let user = {
    name: "John",
    money: 1000,

    [Symbol.toPrimitive](hint) {
        alert(`hint: ${hint}`);
        return hint == "string" ? `{name: "${this.name}"}` : this.money;
    },
};

// conversions demo:
alert(user); // hint: string -> {name: "John"}
alert(+user); // hint: number -> 1000
alert(user + 500); // hint: default -> 1500
