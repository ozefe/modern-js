// To declare a constant (unchanging) variable, use const instead of let:
const myBirthday = "18.04.1982";

// Variables declared using const are called "constants".
// They cannot be reassigned. An attempt to do so would cause an error:
// myBirthday = "01.01.2001"; // error, can't reassign the constant!

// There is a widespread practice to use constants as aliases for
// difficult-to-remember values that are known before execution.
// Such constants are named using capital letters and underscores.
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ...when we need to pick a color
let color = COLOR_ORANGE;
alert(color); // #FF7F00

// The value of pageLoadTime is not known before the page load, so it's named
// normally. But it's still a constant because it doesn't change after the
// assignment.
const pageLoadTime = 5; /* time taken by a webpage to load */
