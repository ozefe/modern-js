function sumInput() {
  let inputs = [];
  let input;

  while (true) {
    input = prompt("Enter a number", 10);

    if (input === "" || input === null || !isFinite(input)) break;

    inputs.push(+input);
  }

  let sum = 0;
  for (let input of inputs) sum += input;

  return sum;
}
