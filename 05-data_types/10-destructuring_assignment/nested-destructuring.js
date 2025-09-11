let options = {
    size: {
        width: 100,
        height: 200,
    },
    items: ["Cake", "Donut"],
    extra: true,
};

// destructuring assignment split in multiple lines for clarity
let {
    size: {
        // put size here
        width,
        height,
    },
    items: [item1, item2], // assign items here
    title = "Menu", // not present in the object (default value is used)
} = options;

alert(title); // Menu
alert(width); // 100
alert(height); // 200
alert(item1); // Cake
alert(item2); // Donut
