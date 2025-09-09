// `str.indexOf(substr, pos)`: It looks for the `substr` in `str`, starting
// from the given position `pos`, and returns the position where the match was
// found or -1 if nothing can be found.
let str = "Widget with id";

alert(str.indexOf("Widget")); // 0, because 'Widget' is found at the beginning
alert(str.indexOf("widget")); // -1, not found, the search is case-sensitive

alert(str.indexOf("id")); // 1, "id" is found at the position 1

// The optional second parameter allows us to start searching from a given
// position:
alert(str.indexOf("id", 2)); // 12

// If we're interested in all occurrences, we can run `indexOf` in a loop:
str = "As sly as a fox, as strong as an ox";
let target = "as"; // let's look for it

let pos = 0;
while (true) {
    let foundPos = str.indexOf(target, pos);
    if (foundPos == -1) break;

    alert(`Found at ${foundPos}`);
    pos = foundPos + 1; // continue the search from the next position
}

// The same algorithm but shorter:
pos = -1;
while ((pos = str.indexOf(target, pos + 1)) != -1) {
    alert(pos);
}

// There is also a similar method `str.lastIndexOf(substr, position)` that
// searches from the end of a string to its beginning. It would list the
// occurrences in the reverse order.

// The more modern method `str.includes(substr, pos)` returns true/false
// depending on whether `str` contains `substr` within. It's the right choice
// if we need to test for the match, but don't need its position:
alert("Widget with id".includes("Widget")); // true
alert("Hello".includes("Bye")); // false

// The optional second argument of `str.includes` is the position to start
// searching from:
alert("Widget".includes("id")); // true
alert("Widget".includes("id", 3)); // false, from position 3 there is no "id"

// The methods `str.startsWith` and `str.endsWith` do exactly what they say:
alert("Widget".startsWith("Wid")); // true, "Widget" starts with "Wid"
alert("Widget".endsWith("get")); // true, "Widget" ends with "get"
