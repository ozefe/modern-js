let i = 0;
while (i < 3) {
    alert(i);
    i++;
}

i = 3;
// when i becomes 0, the condition becomes falsy, and the loop stops
while (i) {
    alert(i);
    i--;
}

i = 3;
while (i) alert(i--);

i = 0;
do {
    alert(i);
    i++;
} while (i < 3);

for (let i = 0; i < 3; i++) {
    alert(i);
}

// for (let i = 0; i < 3; i++) alert(i);

// run begin
i = 0;
// if condition -> run body and run step
if (i < 3) {
    alert(i);
    i++;
}
// if condition -> run body and run step
if (i < 3) {
    alert(i);
    i++;
}
// if condition -> run body and run step
if (i < 3) {
    alert(i);
    i++;
}
// ...finish, because now i == 3

for (let j = 0; i < 3; i++) {
    alert(j); // 0, 1, 2
}
alert(j); // error, no such variable

i = 0;
// no need for "begin"
for (; i < 3; i++) {
    alert(i); // 0, 1, 2
}

i = 0;
for (; i < 3; ) {
    alert(i++);
}

for (;;) {
    // infinite loop
    break;
}

let sum = 0;
while (true) {
    let value = Number(prompt("Enter a number", ""));
    if (!value) break;

    sum += value;
}
alert(`Sum: ${sum}`);

for (let i = 0; i < 10; i++) {
    // if true, skip the remaining part of the body
    if (i % 2 == 0) continue;

    alert(i); // 1, 3, 5, 7, 9, ...
}

for (let i = 0; i < 10; i++) {
    if (i > 5) {
        alert(i);
    } else {
        continue;
    }
}

for (let i = 0; i < 10; i++) {
    // continue isn't allowed here
    // (i > 5) ? alert(i) : continue;
}

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        let input = prompt(`Value at coords (${i}, ${j})`, "");

        // what if we want to exit from here to Done (below)?
    }
}
alert("Done!");

outer: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        let input = prompt(`Value at coords (${i}, ${j})`, "");

        // if an empty string or canceled, then break out of both loops
        if (!input) break outer;

        // do something with the value...
    }
}
alert("Done!");

// jump to the label below (doesn't work)
// break label;
// label: for (;;) {}

label: {
    // ...
    break label; // works
    // ...
}
