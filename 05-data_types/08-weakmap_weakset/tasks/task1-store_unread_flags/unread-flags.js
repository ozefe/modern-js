let messages = [
    { text: "Hello", from: "John" },
    { text: "How goes?", from: "John" },
    { text: "See you soon", from: "Alice" },
];

let messagesRead = new WeakSet();

// Only the second message is read:
messagesRead.add(messages[1]);

for (let message of messages) {
    alert(
        `Message "${message.text}" from ${message.from} is ${
            messagesRead.has(message) ? "read" : "unread"
        }`
    );
}
