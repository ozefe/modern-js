// Bad way:
function showMenuBad(
    title = "Untitled",
    width = 200,
    height = 100,
    items = []
) {
    // ...
}

// undefined where default values are fine
showMenuBad("My Menu", undefined, undefined, ["Item1", "Item2"]);

// We can pass parameters as an object, and the function immediately
// destructurizes them into variables, and we can also use more complex
// destructuring with nested objects and colon mappings:
// we pass object to function
let options = {
    title: "My menu",
    items: ["Item1", "Item2"],
};

// ...and it immediately expands it to variables
function showMenuGood({
    title = "Untitled",
    width: w = 100, // width goes to w
    height: h = 200, // height goes to h
    items = [],
}) {
    // title, items: taken from options,
    // width, height: defaults used
    alert(`${title} ${w} ${h}`); // My Menu 200 100
    alert(items); // Item1, Item2
}

showMenuGood(options);

// Please note that such destructuring assumes that showMenu() does have an
// argument. If we want all values by default, then we should specify an empty
// object:
showMenuGood({}); // ok, all values are default
// showMenuGood(); // this would give an error

// We can fix this by making {} the default value for the whole object of
// parameters:
function showMenuBetter({ title = "Menu", width = 100, height = 200 } = {}) {
    alert(`${title} ${width} ${height}`);
}

showMenuBetter(); // Menu 100 200
