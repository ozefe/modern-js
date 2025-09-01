// The mini-window with the message is called a modal window. The word "modal"
// means that the visitor can't interact with the rest of the page, press other
// buttons, etc, until they have dealt with the window. In this case -- until
// they press "OK".
alert("Hello");

// It shows a modal window with a text message, an input field for the visitor,
// and the buttons OK/Cancel.
// result = prompt(title, [default]);
let age = prompt("How old are you?", 100);

alert(`You are ${age} years old!`); // You are 100 years old!

// The second parameter is optional, but if we don't supply it, Internet
// Explorer will insert the text "undefined" into the prompt. So, for prompts
// to look good in IE, we recommend always providing the second argument:
let test = prompt("Test", ""); // <-- for IE

// The function confirm shows a modal window with a question and two buttons:
// OK and Cancel. The result is true if OK is pressed and false otherwise.
// result = confirm(question);
let isBoss = confirm("Are you the boss?");

alert(isBoss); // true if OK is pressed
