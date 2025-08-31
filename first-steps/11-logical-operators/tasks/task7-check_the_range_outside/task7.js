let age = +prompt("Please enter your age: ", 23);

// Using NOT (`!`) operator
if (!(age >= 14 && age <= 90)) {
    alert(`Your age (${age}) is NOT between 14 and 90, inclusively.`);
} else {
    alert(`Your age (${age}) is between 14 and 90, inclusively.`);
}

// Using OR (`||`) operator
if (age < 14 || age > 90) {
    alert(`Your age (${age}) is NOT between 14 and 90, inclusively.`);
} else {
    alert(`Your age (${age}) is between 14 and 90, inclusively.`);
}
