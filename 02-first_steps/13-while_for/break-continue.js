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
