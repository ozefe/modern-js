let year = prompt(
    "In which year was ECMAScript-2015 specification published?",
    ""
);

if (year == 2015) alert("You are right!");

if (year == 2015) {
    alert("That's correct!");
    alert("You're so smart!");
}

let cond = year == 2015; // equality evaluates to true or false
if (cond) {
    alert("Pre-evaluated values can be used too!");
}

if (year == 2015) {
    alert("You guessed it right!");
} else {
    alert("How can you be so wrong?"); // any value except 2015
}

if (year < 2015) {
    alert("Too early...");
} else if (year > 2015) {
    alert("Too late");
} else {
    alert("Exactly!");
}

let accessAllowed;
let age = prompt("How old are you?", "");

if (age > 18) {
    accessAllowed = true;
} else {
    accessAllowed = false;
}

alert(accessAllowed);
