let a = +prompt("a: ", 2);
let b = +prompt("b: ", 3);
let result;

if (a + b < 4) {
    result = "Below";
} else {
    result = "Over";
}
alert(result);

// Using the conditional operator `?`:
result = a + b < 4 ? "Below" : "Over";
alert(result);
