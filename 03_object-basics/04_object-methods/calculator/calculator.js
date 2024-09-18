let calculator = {
  read() {
    this.a = +prompt("a?", 2);
    this.b = +prompt("b?", 3);
  },
  sum() {
    this.a + this.b;
  },
  mul() {
    this.a * this.b;
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
