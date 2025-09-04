let calculator = {
    read() {
        this.a = +prompt("Please enter a value for a:", 2);
        this.b = +prompt("Please enter a value for b:", 3);
    },
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    },
};

calculator.read();
alert(`Sum: ${calculator.sum()}`);
alert(`Mul: ${calculator.mul()}`);
