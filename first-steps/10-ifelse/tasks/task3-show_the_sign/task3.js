let number = prompt("Please enter a number: ", "");

let sign = number > 0 ? 1 : number == 0 ? 0 : -1;
alert(sign);

// Or, in a more traditional and readable way:
if (number > 0) {
    alert(1);
} else if (number == 0) {
    alert(0);
} else {
    alert(-1);
}
