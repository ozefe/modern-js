function readNumber() {
  while (true) {
    let input = prompt("number?", 10);
    if (+input === 0 || input === "") {
      return null;
    } else if (isFinite(input)) {
      return +input;
    }
  }
}
