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

// The "do...while" loop
// do {
//     // loop body
// } while (condition);

i = 0;
do {
    alert(i);
    i++;
} while (i < 3);

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

// Breaking the loop
let sum = 0;
while (true) {
    let value = +prompt("Enter a number", "");

    if (!value) break;

    sum += value;
}
alert(`Sum: ${sum}`);

// Continue to the next iteration
for (let i = 0; i < 10; i++) {
    // if true, skip the remaining part of the body
    if (i % 2 == 0) continue;

    alert(i); // 1, then 3, 5, 7, 9
}

for (let i = 0; i < 10; i++) {
    if (i % 2) {
        alert(i);
    }
}

for (let i = 0; i < 10; i++) {
    if (i > 5) {
        alert(i);
    } else {
        continue;
    }

    // Note that syntax constructs that are not expressions cannot be used with
    // the ternary operator `?`:
    // (i > 5) ? alert(i) : continue; // continue isn't allowed here
}

// Labels for break/continue
outer: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        let input = prompt(`Value at coords (${i}, ${j})`, "");

        // if an empty string or canceled, then break out of both loops
        if (!input) break outer;

        // do something with the value...
    }
}
alert("Done!");

// break label; // jump to the label below (doesn't work)
label: for (let i = 0; i < 3; i++) alert(i);

label: {
    // ...
    break label; // works
    // ...
}
