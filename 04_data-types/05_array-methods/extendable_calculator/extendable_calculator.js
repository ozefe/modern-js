function Calculator() {
  this.supported_functions = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b,
  };

  this.calculate = function (str) {
    let [OPERAND_ONE, OPERATOR, OPERAND_TWO] = str.split(" ");

    OPERAND_ONE = parseInt(OPERAND_ONE);
    OPERAND_TWO = parseInt(OPERAND_TWO);

    let result = 0;
    if (OPERATOR in this.supported_functions) {
      result = this.supported_functions[OPERATOR](OPERAND_ONE, OPERAND_TWO);
    }

    return result;
  };

  this.addMethod = function (name, func) {
    this.supported_functions[name] = func;
  };
}
