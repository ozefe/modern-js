function Calculator() {
    this.calculate = function (str) {
        let ops = str.split(" ");

        let a = +ops[0];
        let op = ops[1];
        let b = +ops[2];

        if (op in this.operations) return this.operations[op](a, b);

        alert(`Operator ${op} not implemented!`);
    };

    this.operations = {};
    this.addMethod = function (name, func) {
        this.operations[name] = func;
    };

    this.addMethod("+", (a, b) => a + b);
    this.addMethod("-", (a, b) => a - b);
}

let calc = new Calculator();

alert(calc.calculate("3 + 7")); // 10

calc.addMethod("*", (a, b) => a * b);
calc.addMethod("/", (a, b) => a / b);
calc.addMethod("**", (a, b) => a ** b);

alert(calc.calculate("2 ** 3")); // 8

alert(calc.calculate("2 % 3")); // Not implemented
