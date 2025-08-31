// `true || false` -> `-1` -> truthy
if (-1 || 0) alert("first"); // first

// `true && false` -> `0` -> falsy
if (-1 && 0) alert("second"); // nothing

// `false || (true && true)` -> `false || 1` -> `1` -> truthy
if (null || (-1 && 1)) alert("third"); // third
