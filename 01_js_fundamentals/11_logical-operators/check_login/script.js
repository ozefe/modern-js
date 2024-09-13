let login = prompt("Login: ", "");
if (login == "Admin") {
    let password = prompt("Password: ", "");
    if (password == "TheMaster") {
        alert("Welcome!");
    } else if (password) {
        alert("Wrong password");
    } else {
        alert("Canceled");
    }
} else if (login) {
    alert("I don't know you");
} else {
    alert("Canceled");
}
