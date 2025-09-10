// NOTE: The insertion order is used: The iteration goes in the same order as
// the values were inserted. Map preserves this order, unlike a regular Object.

let recipeMap = new Map([
    ["cucumber", 500],
    ["tomatoes", 350],
    ["onion", 50],
]);

// iterate over keys (vegetables)
for (let vegetable of recipeMap.keys()) {
    alert(vegetable); // cucumber, tomatoes, onion
}

// iterate over values (amounts)
for (let amount of recipeMap.values()) {
    alert(amount); // 500, 350, 50
}

// iterate over [key, value] entries
for (let entry of recipeMap) {
    // the same as of recipeMap.entries()
    alert(entry); // cucumber,500 (and so on)
}

// runs the function for each (key, value) pair
recipeMap.forEach((value, key, map) => {
    alert(`${key}: ${value}`); // cucumber: 500 etc
});
