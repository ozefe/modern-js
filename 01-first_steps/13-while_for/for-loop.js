// The "for" loop
// for (begin; condition; step) {
//     // ... loop body ...
// }
for (let i = 0; i < 3; i++) {
    // shows 0, then 1, then 2
    alert(i);
}

// for (let i = 0; i < 3; i++) alert(i)

// run begin
i = 0;
// if condition → run body and run step
if (i < 3) {
    alert(i);
    i++;
}
// if condition → run body and run step
if (i < 3) {
    alert(i);
    i++;
}
// if condition → run body and run step
if (i < 3) {
    alert(i);
    i++;
}
// ...finish, because now i == 3

for (let j = 0; j < 3; j++) {
    alert(j); // 0, 1, 2
}
// alert(j); // error, no such variable

let j = 0;
for (j = 0; j < 3; j++) {
    // use an existing variable
    alert(j); // 0, 1, 2
}
alert(j); // 3, visible, because declared outside of the loop

i = 0; // we have i already declared and assigned
for (; i < 3; i++) {
    // no need for "begin"
    alert(i); // 0, 1, 2
}

i = 0;
for (; i < 3; ) {
    alert(i++);
}

// for (;;) {
//     // repeats without limits
// }
