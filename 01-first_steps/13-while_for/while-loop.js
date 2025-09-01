// The "while" loop
// while (condition) {
//     // code
//     // so-called "loop body"
// }
let i = 0;
while (i < 3) {
    // shows 0, then 1, then 2
    alert(i);
    i++;
}

i = 3;
while (i) {
    // when i becomes 0, the condition becomes falsy, and the loop stops
    alert(i);
    i--;
}

i = 3;
while (i) alert(i--);
