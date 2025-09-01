// Comparison with null and undefined
alert(null === undefined); // false

// There's a special rule. These two are a "sweet couple": they equal each
// other (in the sense of ==), but not any other value.
alert(null == undefined); // true

// Strange result: null vs 0
alert(null > 0); // false, comparison converts null to 0
alert(null == 0); // false, equality check does not convert null to a number
alert(null >= 0); // true, comparison converts null to 0

// An incomparable undefined
// The value undefined shouldn't be compared to other values:
alert(undefined > 0); // false, comparison converts undefined to NaN
alert(undefined < 0); // false, comparison converts undefined to NaN
alert(undefined == 0); // false
