let messages = [
    { text: "Hello", from: "John" },
    { text: "How goes?", from: "John" },
    { text: "See you soon", from: "Alice" },
];

let messagesReadDates = new WeakMap();

// Only the second message is read:
messagesReadDates.set(messages[1], "2025-09-11 13:11:16");

for (let message of messages) {
    let message_read = messagesReadDates.has(message);
    alert(
        `Message "${message.text}" from ${message.from} is ${
            message_read
                ? "read at " + messagesReadDates.get(message)
                : "unread"
        }`
    );
}
