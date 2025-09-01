// let result = condition ? value1 : value2;
accessAllowed = age > 18 ? true : false;
alert(accessAllowed);

// the same
accessAllowed = age > 18;
alert(accessAllowed);

let message =
    age < 3
        ? "Hi, baby!"
        : age < 18
        ? "Hello!"
        : age < 100
        ? "Greetings!"
        : "What an unusual age!";
alert(message);

if (age < 3) {
    message = "Hi, baby!";
} else if (age < 18) {
    message = "Hello!";
} else if (age < 100) {
    message = "Greetings!";
} else {
    message = "What an unusual age!";
}
alert(message);

let company = prompt("Which company created JavaScript?", "");
company == "Netscape" ? alert("Right!") : alert("Wrong.");

if (company == "Netscape") {
    alert("Right!");
} else {
    alert("Wrong.");
}
