function Calculator() {
    this.read = function () {
        this.a = +prompt("Please enter a value for a:", 2);
        this.b = +prompt("Please enter a value for b:", 3);
    };
    this.sum = function () {
        return this.a + this.b;
    };
    this.mul = function () {
        return this.a * this.b;
    };
}

let calculator = new Calculator();

calculator.read();
alert(`Sum: ${calculator.sum()}`);
alert(`Mul: ${calculator.mul()}`);
