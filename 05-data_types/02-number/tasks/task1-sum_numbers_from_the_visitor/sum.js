let num1 = +prompt("Please enter the first number:", 2);
let num2 = +prompt("Please enter the second number:", 3);

if (Number.isFinite(num1) && Number.isFinite(num2)) {
    alert(`${num1} + ${num2} = ${num1 + num2}`);
} else {
    alert("Please provide a valid number!");
}
