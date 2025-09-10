let set = new Set(["oranges", "apples", "bananas"]);

for (let value of set) alert(value);

// the same with forEach:
set.forEach((value, valueAgain, set) => {
    alert(value);
});

// The callback function passed in `forEach` has 3 arguments: a `value`, then
// the same value `valueAgain`, and then the target object `set`. That's for
// compatibility with Map where the callback passed `forEach` has three
// arguments.

// The same methods Map has for iterators are also supported for compatibility:
// returns an iterable object for values
for (let key of set.keys()) alert(`Set key: ${key}`); // oranges,apples,bananas

// same as `set.keys()`, for compatibility with Map
for (let value of set.values()) alert(`Set value: ${value}`); 

// returns an iterable object for entries `[value, value]`, exists for
// compatibility with Map.
for (let entry of set.entries()) alert(`Set entry: ${entry}`);
