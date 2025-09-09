// `str.slice(start [, end])`: Returns the part of the string from `start` to
// (but not including) `end`:
let str = "stringify";

alert(str.slice(0, 5)); // 'strin', the substring from 0 to 5 (not including 5)

// 's', from 0 to 1, but not including 1, so only character at 0
alert(str.slice(0, 1));

// If there is no second argument, then slice goes till the end of the string:
alert(str.slice(2)); // 'ringify', from the 2nd position till the end

// Negative values for start/end are also possible. They mean the position is
// counted from the string end:
// start at the 4th position from the right, end at the 1st from the right
alert(str.slice(-4, -1)); // 'gif'

// `str.substring(start [, end])`: Returns the part of the string between
// `start` and `end` (not including `end`). This is almost the same as `slice`,
// but it allows `start` to be greater than `end` (in this case it simply swaps
// `start` and `end` values).
// these are same for substring
alert(str.substring(2, 6)); // "ring"
alert(str.substring(6, 2)); // "ring"

// ...but not for slice:
alert(str.slice(2, 6)); // "ring" (the same)
alert(str.slice(6, 2)); // "" (an empty string)

// Negative arguments are (unlike `slice`) not supported, they are treated as
// 0.

// `str.substr(start [, length])`: Returns the part of the string from `start`,
// with the given `length`. In contrast with the previous methods, this one
// allows us to specify the `length` instead of the ending position:
alert(str.substr(2, 4)); // 'ring', from the 2nd position get 4 characters

// The first argument may be negative, to count from the end:
alert(str.substr(-4, 2)); // 'gi', from the 4th position get 2 characters

// Only browser-hosted Javascript engines should support this method, and it's
// not recommended to use it. In practice, it's supported everywhere.
