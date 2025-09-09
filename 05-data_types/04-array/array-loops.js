// One of the oldest ways to cycle array items is the for loop over indexes:
let fruits = ["Apple", "Orange", "Pear"];

for (let i = 0; i < fruits.length; i++) {
    alert(`Fruit #${i}: ${fruits[i]}`); // Apple, Orange, Pear
}

// But for arrays there is another form of loop, for..of:
// iterates over array elements
for (let fruit of fruits) {
    alert(fruit); // Apple, Orange, Pear
}

// Technically, because arrays are objects, it is also possible to use for..in:
for (let key in fruits) {
    alert(fruits[key]); // Apple, Orange, Pear
}

// But there are potential problems with it:
// 1. The loop for..in iterates over all properties, not only the numeric ones.
//    There are so-called "array-like" objects in the browser and in other
//    environments, that look like arrays. That is, they have `length` and
//    `index` properties, but they may also have other non-numeric properties
//    and methods, which we usually don't need. The for..in loop will list them
//    though. So if we need to work with array-like objects, then these "extra"
//    properties can become a problem.
// 2. The for..in loop is optimized for generic objects, not arrays, and thus
//    is 10-100 times slower. Of course, it's still very fast. The speedup may
//    only matter in bottlenecks. But still we should be aware of the
//    difference.
