// Local variables
// A variable declared inside a function is only visible inside that function:
function showMessage() {
    let message = "Hello, I'm JavaScript!"; // local variable

    alert(message);
}

showMessage(); // Hello, I'm JavaScript!
// alert(message); // <-- Error! The variable is local to the function
