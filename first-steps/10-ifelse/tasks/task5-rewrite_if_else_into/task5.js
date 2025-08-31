let login = prompt("Please enter your login: ", "");
let message;

if (login == "Employee") {
    message = "Hello";
} else if (login == "Director") {
    message = "Greetings";
} else if (login == "") {
    message = "No login";
} else {
    message = "";
}
alert(message);

message =
    login == "Employee"
        ? "Hello"
        : login == "Director"
        ? "Greetings"
        : login == ""
        ? "No login"
        : "";
alert(message);
