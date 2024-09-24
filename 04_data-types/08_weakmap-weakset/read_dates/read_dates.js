let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" },
];

let readDates = new WeakMap();

// Message "Hello" was read on 24/09/2024
readDates.set(messages[0], Date("24/09/2024"));

alert(
  `Message ${messages[0].text} from ${
    messages[0].from
  } was read on ${readDates.get(messages[0])}`
);
