let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" },
];

let readMessages = new WeakSet();

readMessages.add(messages[0]); // "Hello" was read
alert(
  `Message ${messages[0].text} from ${
    messages[0].from
  } read status: ${readMessages.has(messages[0])}`
);

// "How goes?" was not read
alert(
  `Message ${messages[1].text} from ${
    messages[1].from
  } read status: ${readMessages.has(messages[1])}`
);
