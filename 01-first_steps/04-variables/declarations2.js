let message;

message = "Hello!";
message = "World!"; // value changed
alert(message);

let hello = "Hello world!";
let message2;

// copy 'Hello world' from hello into message2
message2 = hello;

// now two variables hold the same data
alert(hello); // Hello world!
alert(message2); // Hello world!

let message3 = "This";

// repeated 'let' leads to an error
// let message3 = "That"; // SyntaxError: 'message' has already been declared
